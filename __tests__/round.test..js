import Round from '../app/model/round.js';

test('constructor', () => {
    // Arrange
    let object_under_test = new Round();

    // Act
    // Empty

    // Assert
    expect(object_under_test.toString()).toBe("0.0");
});

test('basic dart increment', () => {
    // Arrange
    let object_under_test = new Round();

    // Act
    object_under_test.nextDart();

    // Assert
    expect(object_under_test.toString()).toBe("0.1");
});

test('dart increment 2x', () => {
    // Arrange
    let object_under_test = new Round();
    object_under_test.nextDart();

    // Act
    object_under_test.nextDart();

    // Assert
    expect(object_under_test.toString()).toBe("0.2");
});

test('dart increment rollover', () => {
    // Arrange
    let object_under_test = new Round();
    object_under_test.nextDart();
    object_under_test.nextDart();

    // Act
    object_under_test.nextDart();

    // Assert
    expect(object_under_test.toString()).toBe("1.0");
});

test('Basic round increment', () => {
    // Arrange
    let object_under_test = new Round();

    // Act
    object_under_test.nextRound();

    // Assert
    expect(object_under_test.toString()).toBe("1.0");
});

test('Round increment x2', () => {
    // Arrange
    let object_under_test = new Round();
    object_under_test.nextRound();

    // Act
    object_under_test.nextRound();

    // Assert
    expect(object_under_test.toString()).toBe("2.0");
});

test('Round increment x2 then dart', () => {
    // Arrange
    let object_under_test = new Round();
    object_under_test.nextRound();
    object_under_test.nextRound();

    // Act
    object_under_test.nextDart();

    // Assert
    expect(object_under_test.toString()).toBe("2.1");
});

test('Round increment x2 then dart', () => {
    // Arrange
    let object_under_test = new Round();
    object_under_test.nextRound();
    object_under_test.nextRound();
    object_under_test.nextDart();

    // Act
    object_under_test.nextRound();

    // Assert
    expect(object_under_test.toString()).toBe("3.0");
});
