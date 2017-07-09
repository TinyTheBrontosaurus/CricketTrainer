import Scoreboard from '../app/model/scoreboard.js';
import Target from '../app/model/target.js';

test('constructor', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    // Empty

    // Assert
    expect(object_under_test.isDone()).toBe(false);
    expect(object_under_test.getActiveTarget()).toEqual({
        type: '20',
        counter: new Target()
    });
    expect(object_under_test.getTargetTypes()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 0,
        missCount: 0,
        totalThrows: 0,
        completedRounds: 0,
        currentRound: '0.0',
        hitsPerRound: null
    });
    expect(object_under_test.getRound()).toBe("0.0");
});
