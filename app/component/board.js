/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Row, Grid } from "react-native-easy-grid";
import TargetProgress from './target-progress.js'

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
      for(let targeti = 0; targeti < targetn; targeti++) {
          let target = theArray[targeti];
          let callback = () => {};
          let disabled = true;
          if(targeti === activei) {
              callback = () => {
                  let scoreboard = this.state.scoreboard;
                  scoreboard.hit();
                  this.setState({scoreboard: scoreboard});
              };
              disabled = false;
          }
          rows.push(
              <Row key={targeti}>
                  <TargetProgress label={target.type}
                                hits={target.counter.hits()}
                                cleared={'-'}
                                callback={callback}
                                disabled={disabled}
                                />
              </Row>
          );
          disabled = true;
      }
      return rows;
  }
};

AppRegistry.registerComponent('Board', () => Board);
