/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";


export default class SingleTarget extends Component {
    constructor(props) {
        super(props);
    }

    render()
};

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
            {this.displayAsNumbers()}
          </Col>
          <Col size={1}>
            {this.displayAsRows(this.state.actions)}
          </Col>
        </Grid>
    );
  }

  displayAsNumbers() {
      let theArray = this.state.numbers;
      let len = theArray.length;
      let rows = [];
      for(let i = 0; i < len; i++) {
          rows.push(
              <Row key={i}>
                  <Grid>
                      <Col size={3}>
                          <Button
                              onPress={(e) => {this.dartHit(e, i)}}
                              title={"" + theArray[i]}
                              color="#841584"
                              accessibilityLabel={"Hit target " + theArray[i]}
                          />
                      </Col>
                      <Col size={1}>
                        <Text>\</Text>
                      </Col>
                      <Col size={1}>
                          <Text>3.2</Text>
                      </Col>
                  </Grid>
              </Row>
          );
      }
      return rows;
  }

    displayAsRows(theArray) {
        let len = theArray.length;
        let rows = [];
        for(let i = 0; i < len; i++) {
            rows.push(
                <Row key={i}>
                <Text>{theArray[i]}</Text>
                </Row>);
        }
        return rows;
    }

    dartHit(event, index) {

    }
};

AppRegistry.registerComponent('CricketTrainer', () => CricketTrainer);
