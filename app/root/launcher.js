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
 * The full board for crickets, including all the targets, the control board, and the statistics. Note
 * that the hitOne/missOne methods assume there are three darts
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
                             fullRoundHitAll={() => {this.fullRoundHitAll()}}
                             fullRoundMissOne={(index) => (this.fullRoundMissOne(index))}
                             fullRoundHitOne={(index) => (this.fullRoundHitOne(index))}
                             fullRoundMissAll={() => {this.fullRoundMissAll()}}
                             canPlayFullRound={this.state.scoreboard.canPlayFullRound()}/>
                    <Stats stats={this.state.scoreboard.getStats()} />
                </Col>
            </Grid>
        );
    }

    /**
     * Mark a single hit and update the state
     */
    hit() {
        let scoreboard = this.state.scoreboard;
        scoreboard.hit();
        this.setState({scoreboard: scoreboard});

    }

    /**
     * Mark a single miss and update the state
     */
    miss() {
        let scoreboard = this.state.scoreboard;
        scoreboard.miss();
        this.setState({scoreboard: scoreboard});

    }

    /**
     * Mark a round as having hit all, and update the state
     */
    fullRoundHitAll() {
        let scoreboard = this.state.scoreboard;
        scoreboard.fullRoundHitAll();
        this.setState({scoreboard: scoreboard});
    }

    /**
     * Mark a round as having missed one, and update the state
     */
    fullRoundMissOne(index) {
        let scoreboard = this.state.scoreboard;
        scoreboard.fullRoundMissOne(index);
        this.setState({scoreboard: scoreboard});
    }

    /**
     * Mark a round as having hit one, and update the state
     */
    fullRoundHitOne(index) {
        let scoreboard = this.state.scoreboard;
        scoreboard.fullRoundHitOne(index);
        this.setState({scoreboard: scoreboard});
    }

    /**
     * Mark a round as having missed all, and update the state
     */
    fullRoundMissAll() {
        let scoreboard = this.state.scoreboard;
        scoreboard.fullRoundMissAll();
        this.setState({scoreboard: scoreboard});
    }
};

AppRegistry.registerComponent('CricketTrainer', () => CricketTrainer);