'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import CricketTrainer from './app/root/launcher.js';

export default class AndroidRoot extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <CricketTrainer/>
        );
    }
};

AppRegistry.registerComponent('AndroidRoot', () => AndroidRoot);