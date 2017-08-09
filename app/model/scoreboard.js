import Target from './target.js';
import Round from './round.js';


/**
 * Keeps track of the scoreboard and its affiliated stats
 */
export default class Scoreboard {

    constructor() {
        let targetLabels = ['20', '18', '19', '17', '16', '15', 'B'];
        this._targets = [];
        for(let targetLabel of targetLabels) {
            this._targets.push(new Target(targetLabel));
        }
        this._activeTargetIndex = 0;
        this._activeTarget = this._targets[this._activeTargetIndex];

        this._round = new Round();
    }

    /**
     * Marks a dart that hits. Moves to next target as appropriate.
     * Ignored if scoreboard is already done.
     * @returns {Scoreboard} this
     */
    hit() {
        if(!this.isDone()) {
            this._round.nextDart();
            this._activeTarget.markHit({round: this._round.toString()});
            if (this._activeTarget.isDone()) {
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
     * Marks a dart that misses.
     * Ignored if scoreboard is already done
     * @returns {Scoreboard} this
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
    missRestOfRound() {
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

    /**
     * @returns {number} The index of the current active target. Corresponds to getTargets()
     */
    getActiveTargetIndex() {
        return this._activeTargetIndex;
    }

    /**
     * @returns {Array} The array of targets
     */
    getTargets() {
        return this._targets;
    }

    /**
     * @returns {Array} an array of all target types, in the order they will be hit
     */
    getTargetLabels() {
        return this._targets.map((target) => {return target.getLabel()})
    }

    /**
     * Returns the statistics of the scoreboard
     * @returns {{hitCount: number, missCount: number, totalThrows: *, completedRounds: *, currentRound: *, hitsPerRound: *}}
     */
    getStats() {
        let hitCount = 0;
        for(let target of this._targets)
        {
            hitCount += target.hits();
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
