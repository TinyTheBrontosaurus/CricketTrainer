export default class Round {

    constructor() {
        this._roundsCompleted = 0;
        this._dartsThrown = 0;
    }

    toString() {
        return "${this._roundsCompleted}.${this._dartsThrown}";
    }

    nextRound() {
        this._roundsCompleted += 1;
        this._dartsThrown = 0;
    }

    nextDart() {
        this._dartsThrown += 1;
        if(this._dartsThrown >= 3) {
            this.nextRound();
        }
    }
}