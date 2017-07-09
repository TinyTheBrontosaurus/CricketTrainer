import Target from '../app/model/target.js';

test('constructor', () => {
    // Arrange
    let object_under_test = new Target();

    // Act
    // Empty

    // Assert
    expect(object_under_test.hits()).toBe(0);
});

test('basic increment', () => {
    // Arrange
    let object_under_test = new Target();

    // Act
    object_under_test.markHit();

    // Assert
    expect(object_under_test.hits()).toBe(1);
});

test('increment 2x', () => {
    // Arrange
    let object_under_test = new Target();
    object_under_test.markHit();

    // Act
    object_under_test.markHit();

    // Assert
    expect(object_under_test.hits()).toBe(2);
});

test('increment 3x', () => {
    // Arrange
    let object_under_test = new Target();
    object_under_test.markHit();
    object_under_test.markHit();

    // Act
    object_under_test.markHit();

    // Assert
    expect(object_under_test.hits()).toBe(3);
});

test('increment 4x', () => {
    // Arrange
    let object_under_test = new Target();
    object_under_test.markHit();
    object_under_test.markHit();
    object_under_test.markHit();

    // Assert
    expect(() => {object_under_test.markHit()}).toThrow();
    expect(object_under_test.hits()).toBe(3);
});
