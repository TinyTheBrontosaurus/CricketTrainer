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
            this._activeTarget.markHit();
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

    undo() {

    }

    isDone() {
        return !!this._activeTarget;
    }

    getActiveTarget() {
        return this._activeTarget;
    }

    getTargetTypes() {
        return this._targets.map((target) => {return target.targetType})
    }

    getStats() {
        let hitCount = 0;
        for(let target of this._targets)
        {
            hitCount += target.hits();
        }
        let totalThrows = this._round.getTotalThrows();

        let stats = {
            hitCount: hitCount,
            missCount: totalThrows - hitCount,
            totalThrows: totalThrows,
            totalRounds: this._round.toString(),
            hitsPerRound: hitCount / this._round.getCompletedRounds()
        }
    }

    getRound() {
        return this._round.toString();
    }

}