export default class Target {
    MAX_HITS = 3;
    constructor() {
        this._hits = 0;
    }

    hits() {
        return this._hits;
    }

    markHit() {
        if(this.isDone()) {
            throw `Exceeded target hits (${this._hits})`
        }
        this._hits += 1;
    }

    isDone() {
        return this._hits >= this.MAX_HITS;
    }
}