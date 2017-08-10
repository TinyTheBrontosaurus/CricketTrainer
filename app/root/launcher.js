import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import Scoreboard from '../model/scoreboard.js';
import Board from '../component/board.js';
import Control from '../component/control.js';
import Stats from '../component/stats.js';
import { Col, Grid } from "react-native-easy-grid";


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
            <Grid>
                <Col size={2}>
                    <Board scoreboard={this.state.scoreboard} onHit={() => {this.hit()}}/>
                </Col>
                <Col size={1}>
                    <Control onHit={() => {this.hit()}}
                             onMiss={() => {this.miss()}}
                             onMissOneThisRound={(index) => (this.missOneThisRound(index))}
                             onHitOneThisRound={(index) => (this.hitOneThisRound(index))}
                             onMissRestOfRound={() => {this.missRestOfRound()}}/>
                    <Stats stats={this.state.scoreboard.getStats()} />
                </Col>
            </Grid>
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
};

AppRegistry.registerComponent('CricketTrainer', () => CricketTrainer);