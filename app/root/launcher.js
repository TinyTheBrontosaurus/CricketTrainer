import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';

import Scoreboard from '../model/scoreboard.js';
import Board from '../component/board.js';
import PerThrowControl from '../component/per-throw-control.js';
import PerRoundControl from '../component/per-round-control.js';
import Stats from '../component/stats.js';


/**
 * The full board for crickets, including all the targets, the control board, and the statistics
 */
export default class CricketTrainer extends Component {
    constructor(props) {
        super(props);
        this.state = {scoreboard: new Scoreboard()};
    }
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, marginLeft: "3%", marginRight: "1.5%"}}>
                    <Board scoreboard={this.state.scoreboard} onHit={() => {this.hit()}}/>
                </View>
                <View style={{flex: 2, flexDirection: 'column', marginRight: "3%", marginLeft: "1.5%"}}>
                    <View style={{flex: 2, marginTop: "3%", martinTop: "3%"}}>
                        <PerThrowControl
                            onHit={() => {this.hit()}}
                            onMiss={() => {this.miss()}}
                        />
                    </View>
                    <View style={{flex: 3}}>
                        <PerRoundControl
                             onHitAllThisRound={() => {this.hitAllThisRound()}}
                             onMissOneThisRound={(index) => (this.missOneThisRound(index))}
                             onHitOneThisRound={(index) => (this.hitOneThisRound(index))}
                             onMissAllThisRound={() => {this.missAllThisRound()}}/>
                    </View>
                    <View style={{flex: 1}}>
                        <Stats
                            stats={this.state.scoreboard.getStats()} />
                    </View>
                </View>
            </View>
        );
    }

    /**
     * Mark a hit and update the state
     */
    hit() {
        let scoreboard = this.state.scoreboard;
        scoreboard.hit();
        this.setState({scoreboard: scoreboard});

    }

    /**
     * Mark a miss and update the state
     */
    miss() {
        let scoreboard = this.state.scoreboard;
        scoreboard.miss();
        this.setState({scoreboard: scoreboard});

    }

    /**
     * Mark a round as having hit all, and update the state
     */
    hitAllThisRound() {
        let scoreboard = this.state.scoreboard;
        scoreboard.hitAllThisRound();
        this.setState({scoreboard: scoreboard});
    }

    /**
     * Mark a round as having missed one, and update the state
     */
    missOneThisRound(index) {
        let scoreboard = this.state.scoreboard;
        scoreboard.missOneThisRound(index);
        this.setState({scoreboard: scoreboard});
    }

    /**
     * Mark a round as having hit one, and update the state
     */
    hitOneThisRound(index) {
        let scoreboard = this.state.scoreboard;
        scoreboard.hitOneThisRound(index);
        this.setState({scoreboard: scoreboard});
    }

    /**
     * Show that the rest of teh round (or the entire round) is misses; update the state
     */
    missRestOfRound() {
        let scoreboard = this.state.scoreboard;
        scoreboard.missRestOfRound();
        this.setState({scoreboard: scoreboard});
    }

    missAllThisRound() {
        let scoreboard = this.state.scoreboard;
        scoreboard.missAllThisRound();
        this.setState({scoreboard: scoreboard});
    }
};

AppRegistry.registerComponent('CricketTrainer', () => CricketTrainer);