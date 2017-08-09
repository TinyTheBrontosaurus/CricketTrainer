const MAX_HITS = 3;

/**
 * Keeps track of the number of times a target was hit, where a target is a specific spot on the
 * dartboard (e.g., single 18)
 */
export default class Target {
    constructor(label, hits, milestones) {
        this._label = label || '';
        this._hits = hits || 0;
        this._milestones = milestones || [];
    }

    /**
     * @returns {*|number} The number of times this target has been hit
     */
    hits() {
        return this._hits;
    }

    /**
     * Indicate this target has been hit
     * @param milestone The milestone as an object
     * @returns {Target} this
     */
    markHit(milestone) {
        if(this.isDone()) {
            throw `Exceeded target hits (${this._hits})`
        }
        this._hits += 1;
        this._milestones.push(milestone);
        return this;
    }

    /**
     * @returns {boolean} True if this target has the maximum number of hits, false otherwise
     */
    isDone() {
        return this._hits >= MAX_HITS;
    }

    /**
     * @returns {*|Array} An array of Rounds in which hits were made
     */
    getMilestones() {
        return this._milestones;
    }

    /**
     * @returns {null} The Round object in which this target was completed, or null if not yet completed
     */
    getDoneRound() {
        if(this.isDone()) {
            return this._milestones[MAX_HITS - 1].round;
        }
        else {
            return null;
        }
    }

    /**
     * Access for the label
     * @returns {*|string} The label
     */
    getLabel() {
        return this._label;
    }
}