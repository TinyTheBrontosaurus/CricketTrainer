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


class SingleTarget extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Grid>
            <Col size={3}>
                <Button
                    onPress={this.props.callback}
                    title={"" + this.props.label}
                    color="#841584"
                    accessibilityLabel={"Hit target " + this.props.label}
                />
            </Col>
            <Col size={1}>
                <Text>{this.props.hits}/3</Text>
            </Col>
            <Col size={1}>
                <Text>{this.props.cleared}</Text>
            </Col>
        </Grid>

    }
}

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
                  <SingleTarget label={theArray[i]}
                                hits={0}
                                cleared={3.1}
                                callback={() => {this.dartHit(i)}}
                                />
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
