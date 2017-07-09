import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import Scoreboard from '../model/scoreboard';
import Board from '../component/board.js';

export default class CricketTrainer extends Component {
    constructor(props) {
        super(props);
        this.model = {scoreboard: new Scoreboard()};
    }
    render() {
        return (
            <Board scoreboard={this.model.scoreboard}>
            </Board>
        );
    }
};

AppRegistry.registerComponent('Launcher', () => Launcher);
