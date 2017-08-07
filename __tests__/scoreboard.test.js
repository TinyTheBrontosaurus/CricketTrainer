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
        counter: new Target(0)
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

test('one hit', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    object_under_test.hit();

    // Assert
    expect(object_under_test.isDone()).toBe(false);
    expect(object_under_test.getActiveTarget()).toEqual({
        type: '20',
        counter: new Target(1, [{round: "0.1"}])
    });
    expect(object_under_test.getTargetTypes()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 1,
        missCount: 0,
        totalThrows: 1,
        completedRounds: 0,
        currentRound: '0.1',
        hitsPerRound: null
    });
    expect(object_under_test.getRound()).toBe("0.1");
});

test('one miss', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    object_under_test.miss();

    // Assert
    expect(object_under_test.isDone()).toBe(false);
    expect(object_under_test.getActiveTarget()).toEqual({
        type: '20',
        counter: new Target(0)
    });
    expect(object_under_test.getTargetTypes()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 0,
        missCount: 1,
        totalThrows: 1,
        completedRounds: 0,
        currentRound: '0.1',
        hitsPerRound: null
    });
    expect(object_under_test.getRound()).toBe("0.1");
});

test('one missRestOfRound', () => {
    // Arrange
    let object_under_test = new Scoreboard();

    // Act
    object_under_test.missRestOfRound();

    // Assert
    expect(object_under_test.isDone()).toBe(false);
    expect(object_under_test.getActiveTarget()).toEqual({
        type: '20',
        counter: new Target(0)
    });
    expect(object_under_test.getTargetTypes()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 0,
        missCount: 3,
        totalThrows: 3,
        completedRounds: 1,
        currentRound: '1.0',
        hitsPerRound: 0
    });
    expect(object_under_test.getRound()).toBe("1.0");
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
    expect(object_under_test.getActiveTarget()).toEqual({
        type: '18',
        counter: new Target(0)
    });
    expect(object_under_test.getTargetTypes()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 3,
        missCount: 0,
        totalThrows: 3,
        completedRounds: 1,
        currentRound: '1.0',
        hitsPerRound: 3
    });
    expect(object_under_test.getRound()).toBe("1.0");
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
    expect(object_under_test.getTargetTypes()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 21,
        missCount: 0,
        totalThrows: 21,
        completedRounds: 7,
        currentRound: '7.0',
        hitsPerRound: 3
    });
    expect(object_under_test.getRound()).toBe("7.0");
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
    expect(object_under_test.getTargetTypes()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 21,
        missCount: 0,
        totalThrows: 21,
        completedRounds: 7,
        currentRound: '7.0',
        hitsPerRound: 3
    });
    expect(object_under_test.getRound()).toBe("7.0");
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
    expect(object_under_test.getTargetTypes()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 21,
        missCount: 20,
        totalThrows: 41,
        completedRounds: 13,
        currentRound: '13.2',
        hitsPerRound: 1.6153846153846154
    });
    expect(object_under_test.getRound()).toBe("13.2");
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
    expect(object_under_test.getTargetTypes()).toEqual(['20', '18', '19', '17', '16', '15', 'B']);
    expect(object_under_test.getStats()).toEqual({
        hitCount: 21,
        missCount: 40,
        totalThrows: 61,
        completedRounds: 20,
        currentRound: '20.1',
        hitsPerRound: 1.05
    });
    expect(object_under_test.getRound()).toBe("20.1");
});