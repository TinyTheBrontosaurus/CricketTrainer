import Scoreboard from '../app/model/scoreboard.js';
import Target from '../app/model/target.js';
import Round from '../app/model/round.js';

test('constructor', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    // Empty

    // Assert
    expect(object_under_test.isDone()).toBe(false);
    expect(object_under_test.getActiveTarget()).toEqual(new Target('20', 0));
    expect(object_under_test.getTargetLabels()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 0,
        missCount: 0,
        totalThrows: 0,
        completedRounds: 0,
        currentRound: new Round(0, 0),
        hitsPerRound: null
    });
    expect(object_under_test.getRound()).toEqual(new Round(0, 0));
});

test('one hit', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    object_under_test.hit();

    // Assert
    expect(object_under_test.isDone()).toBe(false);
    expect(object_under_test.getActiveTarget()).toEqual(new Target('20', 1, [{round: new Round(0, 1)}]));
    expect(object_under_test.getTargetLabels()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 1,
        missCount: 0,
        totalThrows: 1,
        completedRounds: 0,
        currentRound: new Round(0, 1),
        hitsPerRound: null
    });
    expect(object_under_test.getRound()).toEqual(new Round(0, 1));
});

test('two hits then a bunch of misses', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    object_under_test.hit();
    object_under_test.hit();
    object_under_test.miss();
    object_under_test.miss();
    object_under_test.miss();
    object_under_test.miss();
    object_under_test.miss();
    object_under_test.miss();
    object_under_test.miss();

    // Assert
    expect(object_under_test.isDone()).toBe(false);
    expect(object_under_test.getActiveTarget()).toEqual(new Target('20', 2, [
        {round: new Round(0, 1)},
        {round: new Round(0, 2)}]));
    expect(object_under_test.getTargetLabels()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 2,
        missCount: 7,
        totalThrows: 9,
        completedRounds: 3,
        currentRound: new Round(3, 0),
        hitsPerRound: 2.0/3.0
    });
    expect(object_under_test.getRound()).toEqual(new Round(3, 0));
});

test('one miss', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    object_under_test.miss();

    // Assert
    expect(object_under_test.isDone()).toBe(false);
    expect(object_under_test.getActiveTarget()).toEqual(new Target('20', 0));
    expect(object_under_test.getTargetLabels()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 0,
        missCount: 1,
        totalThrows: 1,
        completedRounds: 0,
        currentRound: new Round(0, 1),
        hitsPerRound: null
    });
    expect(object_under_test.getRound()).toEqual(new Round(0, 1));
});

test('one missRestOfRound', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    object_under_test.missRestOfRound();

    // Assert
    expect(object_under_test.isDone()).toBe(false);
    expect(object_under_test.getActiveTarget()).toEqual(new Target('20', 0));
    expect(object_under_test.getTargetLabels()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 0,
        missCount: 3,
        totalThrows: 3,
        completedRounds: 1,
        currentRound: new Round(1, 0),
        hitsPerRound: 0
    });
    expect(object_under_test.getRound()).toEqual(new Round(1, 0));
});

test('Finish first target', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    for(let i = 0; i < 3; i++) {
        object_under_test.hit();
    }

    // Assert
    expect(object_under_test.isDone()).toBe(false);
    expect(object_under_test.getActiveTarget()).toEqual(new Target('18', 0));
    expect(object_under_test.getTargetLabels()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 3,
        missCount: 0,
        totalThrows: 3,
        completedRounds: 1,
        currentRound: new Round(1, 0),
        hitsPerRound: 3
    });
    expect(object_under_test.getRound()).toEqual(new Round(1, 0));
});

test('Finish all target', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    for(let i = 0; i < 3 * 7; i++) {
        object_under_test.hit();
    }

    // Assert
    expect(object_under_test.isDone()).toBe(true);
    expect(object_under_test.getActiveTarget()).toEqual(null);
    expect(object_under_test.getTargetLabels()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 21,
        missCount: 0,
        totalThrows: 21,
        completedRounds: 7,
        currentRound: new Round(7, 0),
        hitsPerRound: 3
    });
    expect(object_under_test.getRound()).toEqual(new Round(7, 0));
});

test('Too many hits', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    for(let i = 0; i < 3 * 7 + 1; i++) {
        object_under_test.hit();
    }

    // Assert
    expect(object_under_test.isDone()).toBe(true);
    expect(object_under_test.getActiveTarget()).toEqual(null);
    expect(object_under_test.getTargetLabels()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 21,
        missCount: 0,
        totalThrows: 21,
        completedRounds: 7,
        currentRound: new Round(7, 0),
        hitsPerRound: 3
    });
    expect(object_under_test.getRound()).toEqual(new Round(7, 0));
});

test('Finish off hits and misses', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    for(let i = 0; i < 3 * 7 + 1; i++) {
        object_under_test.hit();
        object_under_test.miss();
    }

    // Assert
    expect(object_under_test.isDone()).toBe(true);
    expect(object_under_test.getActiveTarget()).toEqual(null);
    expect(object_under_test.getTargetLabels()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 21,
        missCount: 20,
        totalThrows: 41,
        completedRounds: 13,
        currentRound: new Round(13, 2),
        hitsPerRound: 1.6153846153846154
    });
    expect(object_under_test.getRound()).toEqual(new Round(13, 2));
});

test('Finish off hits and missx3s', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    for(let i = 0; i < 3 * 7 + 1; i++) {
        object_under_test.hit();
        object_under_test.missRestOfRound();
    }

    // Assert
    expect(object_under_test.isDone()).toBe(true);
    expect(object_under_test.getActiveTarget()).toEqual(null);
    expect(object_under_test.getTargetLabels()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 21,
        missCount: 40,
        totalThrows: 61,
        completedRounds: 20,
        currentRound: new Round(20, 1),
        hitsPerRound: 1.05
    });
    expect(object_under_test.getRound()).toEqual(new Round(20, 1));
});