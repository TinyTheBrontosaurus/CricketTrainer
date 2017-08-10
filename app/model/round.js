const THROWS_PER_ROUND = 3;

/**
 * Keeps track of the round of darts, where there is an integer round, made up of an integer number
 * of darts thrown.
 */
export default class Round {

    /**
     * Ctor. Start at 0.0.
     */
    constructor(roundsCompleted, dartsThrown) {
        this._roundsCompleted = roundsCompleted || 0;
        this._dartsThrown = dartsThrown || 0;
    }

    /**
     * Convert the round to a string, with <number of completed rounds>.<number of darts thrown this
     * yet-to=be-completed round>
     * @returns {string} The round representing the round
     */
    toString() {
        return `${this._roundsCompleted}.${this._dartsThrown}`;
    }

    /**
     * Increment to the next round with zero darts thrown
     * @returns {Round} this object
     */
    nextRound() {
        this._roundsCompleted += 1;
        this._dartsThrown = 0;
        return this;
    }

    /**
     * Increment to the next darrt, then to the next round as needed
     * @returns {Round}
     */
    nextDart() {
        this._dartsThrown += 1;
        if(this._dartsThrown >= THROWS_PER_ROUND) {
            this.nextRound();
        }
        return this;
    }

    /**
     * @returns {number} the total number of throws throughout the game
     */
    getTotalThrows() {
        return this._roundsCompleted * THROWS_PER_ROUND + this._dartsThrown;
    }

    /**
     * @returns {number} The total number of completed rounds
     */
    getCompletedRounds() {
        return this._roundsCompleted;
    }
}