import Scoreboard from '../app/model/scoreboard.js';

test('constructor', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    // Empty

    // Assert
    expect(JSON.stringify(object_under_test)).toBe(0);
});
