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


export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {scoreboard: this.props.scoreboard};
    }
  render() {
    return (
        <Grid>
            {this.displayAsNumbers()}
        </Grid>
    );
  }

  displayAsNumbers() {
      let theArray = this.state.scoreboard.getTargets();
      let activei = this.state.scoreboard.getActiveTargetIndex();
      let targetn = theArray.length;
      let rows = [];
      let disabled = false;
      for(let targeti = 0; targeti < targetn; targeti++) {
          let target = theArray[targeti];
          let callback = null;
          if(targeti === activei) {
              callback = () => {
                  let scoreboard = this.state.scoreboard;
                  scoreboard.hit();
                  this.setState({scoreboard: scoreboard});
              };
          }
          rows.push(
              <Row key={targeti}>
                  <SingleTarget label={target.type}
                                hits={target.counter.hits()}
                                cleared={'-'}
                                callback={callback}
                                />
              </Row>
          );
          disabled = true;
      }
      return rows;
  }
};

AppRegistry.registerComponent('Board', () => Board);
