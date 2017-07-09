const MAX_HITS = 3;

export default class Target {
    constructor(hits) {
        this._hits = hits || 0;
    }

    hits() {
        return this._hits;
    }

    markHit() {
        if(this.isDone()) {
            throw `Exceeded target hits (${this._hits})`
        }
        this._hits += 1;
        return this;
    }

    isDone() {
        return this._hits >= MAX_HITS;
    }
}