const MAX_HITS = 3;

export default class Target {
    constructor(hits, milestones) {
        this._hits = hits || 0;
        this._milestones = milestones || [];
    }

    hits() {
        return this._hits;
    }

    markHit(round) {
        if(this.isDone()) {
            throw `Exceeded target hits (${this._hits})`
        }
        this._hits += 1;
        this._milestones.push(Object.assign({}, round));
        return this;
    }

    isDone() {
        return this._hits >= MAX_HITS;
    }

    getMilestones() {
        return this._milestones;
    }

    getDoneRound() {
        if(this.isDone()) {
            return this._milestones[MAX_HITS - 1].round;
        }
        else {
            return null;
        }
    }
}