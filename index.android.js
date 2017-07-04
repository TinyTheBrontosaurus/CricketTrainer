/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";

export default class CricketTrainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [20, 18, 19, 17, 16, 15, 'Bullseye'],
            actions: ['Miss', 'Miss x3', 'Undo']
        };
    }
  render() {
    return (
        <Grid>
          <Col size={3}>
            {this.displayAsRows(this.state.numbers)}
          </Col>
          <Col size={1}>
            {this.displayAsRows(this.state.actions)}
          </Col>
        </Grid>
    );
  }

    displayAsRows(theArray) {
        let len = theArray.length;
        let rows = [];
        for(let i = 0; i < len; i++) {
            rows.push(<Row key={i}><Text>{theArray[i]}</Text></Row>);
        }
        return rows;
    }
};

AppRegistry.registerComponent('CricketTrainer', () => CricketTrainer);
