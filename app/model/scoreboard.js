/**
 * Created by big89 on 7/8/2017.
 */

import Target from './target.js';
import Round from './round.js';


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

    miss() {
        if(!this.isDone()) {
            this._round.nextDart();
        }
        return this;
    }

    missx3() {
        if(!this.isDone()) {
            this._round.nextRound();
        }
        return this;
    }

    isDone() {
        return !this._activeTarget;
    }

    getActiveTarget() {
        return this._activeTarget;
    }

    getTargetTypes() {
        return this._targets.map((target) => {return target.type})
    }

    getStats() {
        let hitCount = 0;
        for(let target of this._targets)
        {
            hitCount += target.counter.hits();
        }
        let totalThrows = this._round.getTotalThrows();
        let hitsPerRound = null;
        let completedRounds = this._round.getCompletedRounds()
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

    getRound() {
        return this._round.toString();
    }

}