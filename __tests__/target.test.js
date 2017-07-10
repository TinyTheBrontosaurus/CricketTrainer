import Target from '../app/model/target.js';

test('constructor', () => {
    // Arrange
    let object_under_test = new Target();

    // Act
    // Empty

    // Assert
    expect(object_under_test.hits()).toBe(0);
    expect(object_under_test.getDoneRound()).toBe(null);
    expect(object_under_test.isDone()).toBe(false);
    expect(object_under_test.getMilestones()).toEqual([]);
});

test('basic increment', () => {
    // Arrange
    let object_under_test = new Target();

    // Act
    object_under_test.markHit({round: 1});

    // Assert
    expect(object_under_test.hits()).toBe(1);
    expect(object_under_test.getDoneRound()).toBe(null);
    expect(object_under_test.isDone()).toBe(false);
    expect(object_under_test.getMilestones()).toEqual([{round: 1}]);
});

test('increment 2x', () => {
    // Arrange
    let object_under_test = new Target();
    object_under_test.markHit({round: 1});

    // Act
    object_under_test.markHit({round: 2});

    // Assert
    expect(object_under_test.hits()).toBe(2);
    expect(object_under_test.getDoneRound()).toBe(null);
    expect(object_under_test.isDone()).toBe(false);
    expect(object_under_test.getMilestones()).toEqual([{round: 1}, {round: 2}]);
});

test('increment 3x', () => {
    // Arrange
    let object_under_test = new Target();
    object_under_test.markHit({round: 1});
    object_under_test.markHit({round: 2});

    // Act
    object_under_test.markHit({round: 3});

    // Assert
    expect(object_under_test.hits()).toBe(3);
    expect(object_under_test.getDoneRound()).toEqual(3);
    expect(object_under_test.isDone()).toBe(true);
    expect(object_under_test.getMilestones()).toEqual([{round: 1}, {round: 2}, {round: 3}]);
});

test('increment 4x', () => {
    // Arrange
    let object_under_test = new Target();
    object_under_test.markHit({round: 1});
    object_under_test.markHit({round: 2});
    object_under_test.markHit({round: 3});

    // Assert
    expect(() => {object_under_test.markHit({round: 4})}).toThrow();
    expect(object_under_test.hits()).toBe(3);
    expect(object_under_test.getDoneRound()).toEqual(3);
    expect(object_under_test.isDone()).toBe(true);
    expect(object_under_test.getMilestones()).toEqual([{round: 1}, {round: 2}, {round: 3}]);

});
