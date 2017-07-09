import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import Scoreboard from '../model/scoreboard.js';
import Board from '../component/board.js';
import Control from '../component/control.js';
import { Col, Grid } from "react-native-easy-grid";


export default class CricketTrainer extends Component {
    constructor(props) {
        super(props);
        this.state = {scoreboard: new Scoreboard()};
    }
    render() {
        return (
            <Grid>
                <Col size={3}>
                    <Board scoreboard={this.state.scoreboard} onHit={() => {this.hit()}}/>
                </Col>
                <Col size={1}>
                    <Control onHit={() => {this.hit()}}
                             onMiss={() => {this.miss()}}
                             onMissx3={() => {this.missx3()}}/>
                </Col>
            </Grid>
        );
    }

    hit() {
        let scoreboard = this.state.scoreboard;
        scoreboard.hit();
        this.setState({scoreboard: scoreboard});

    }

    miss() {
        let scoreboard = this.state.scoreboard;
        scoreboard.miss();
        this.setState({scoreboard: scoreboard});

    }

    missx3() {
        let scoreboard = this.state.scoreboard;
        scoreboard.missx3();
        this.setState({scoreboard: scoreboard});

    }


};

AppRegistry.registerComponent('CricketTrainer', () => CricketTrainer);