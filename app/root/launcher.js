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
                             onMissx3={() => {this.missx3()}}/>
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
     * Show that the rest of teh round (or the entire round) is misses; update the state
     */
    missx3() {
        let scoreboard = this.state.scoreboard;
        scoreboard.missx3();
        this.setState({scoreboard: scoreboard});

    }
};

AppRegistry.registerComponent('CricketTrainer', () => CricketTrainer);