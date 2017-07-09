import Target from './target.js';
import Round from './round.js';


/**
 * Keeps track of the scoreboard and it's affiliated stats
 */
export default class Scoreboard {

    constructor() {
        let targetTypes = ['20', '18', '19', '17', '16', '15', 'B'];
        this._targets = [];
        for(let targetType of targetTypes) {
            this._targets.push({type: targetType, counter: new Target()});
        }
        this._activeTargetIndex = 0;
        this._activeTarget = this._targets[this._activeTargetIndex];

        this._round = new Round();
    }

    /**
     * Marks a dart that hits. Moves to next target as appropriate.
     * Ignored if scoreboard is already done.
     * @returns {Scoreboard}
     */
    hit() {
        if(!this.isDone()) {
            this._round.nextDart();
            this._activeTarget.counter.markHit();
            if (this._activeTarget.counter.isDone()) {
                this._activeTargetIndex++;
                if (this._activeTargetIndex >= this._targets.length) {
                    this._activeTarget = null;
                }
                else {
                    this._activeTarget = this._targets[this._activeTargetIndex];
                }
            }
        }
        return this;
    }

    /**
     * Marks a dart that hits.
     * Ignored if scoreboard is already done
     * @returns {Scoreboard}
     */
    miss() {
        if(!this.isDone()) {
            this._round.nextDart();
        }
        return this;
    }

    /**
     * Finishes off the current round with misses; anywhere from 1 to 3 misses is registered.
     * Ignored if scoreboard is already done.
     * @returns {Scoreboard}
     */
    missx3() {
        if(!this.isDone()) {
            this._round.nextRound();
        }
        return this;
    }

    /**
     * True if the game is over, false otherwise
     * @returns {boolean}
     */
    isDone() {
        return !this._activeTarget;
    }

    /**
     * Returns the active target, or null if done
     * @returns {*|null}
     */
    getActiveTarget() {
        return this._activeTarget;
    }

    getActiveTargetIndex() {
        return this._activeTargetIndex;
    }

    getTargets() {
        return this._targets;
    }

    /**
     * Returns an array of all target types, in the order they will be hit
     * @returns {Array}
     */
    getTargetTypes() {
        return this._targets.map((target) => {return target.type})
    }

    /**
     * Returns the statistics of the scoreboard
     * @returns {{hitCount: number, missCount: number, totalThrows: *, completedRounds: *, currentRound: *, hitsPerRound: *}}
     */
    getStats() {
        let hitCount = 0;
        for(let target of this._targets)
        {
            hitCount += target.counter.hits();
        }
        let totalThrows = this._round.getTotalThrows();
        let hitsPerRound = null;
        let completedRounds = this._round.getCompletedRounds();
        if(completedRounds) {
            hitsPerRound = hitCount / completedRounds;
        }

        return {
            hitCount: hitCount,
            missCount: totalThrows - hitCount,
            totalThrows: totalThrows,
            completedRounds: completedRounds,
            currentRound: this._round.toString(),
            hitsPerRound: hitsPerRound
        };
    }

    /**
     * Returns the round as a string
     * @returns {*}
     */
    getRound() {
        return this._round.toString();
    }

}