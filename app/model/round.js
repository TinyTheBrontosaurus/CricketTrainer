const THROWS_PER_ROUND = 3;

export default class Round {

    constructor() {
        this._roundsCompleted = 0;
        this._dartsThrown = 0;
    }

    toString() {
        return `${this._roundsCompleted}.${this._dartsThrown}`;
    }

    nextRound() {
        this._roundsCompleted += 1;
        this._dartsThrown = 0;
        return this;
    }

    nextDart() {
        this._dartsThrown += 1;
        if(this._dartsThrown >= THROWS_PER_ROUND) {
            this.nextRound();
        }
        return this;
    }

    getTotalThrows() {
        return this._roundsCompleted * THROWS_PER_ROUND + this._dartsThrown;
    }

    getCompletedRounds() {
        return this._roundsCompleted;
    }
}