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


/**
 * Show all the targets lined up vertically, and enable/disable them based upon order and progress
 */
export default class Board extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <Grid>
            {this.displayAsNumbers()}
        </Grid>
    );
  }

  displayAsNumbers() {
      let theArray = this.props.scoreboard.getTargets();
      let activei = this.props.scoreboard.getActiveTargetIndex();
      let targetn = theArray.length;
      let rows = [];
      for(let targeti = 0; targeti < targetn; targeti++) {
          let target = theArray[targeti];
          let callback = () => {};
          let disabled = true;
          if(targeti === activei) {
              callback = this.props.onHit;
              disabled = false;
          }
          rows.push(
              <Row key={targeti}>
                  <TargetProgress label={target.type}
                                hits={target.counter.hits()}
                                cleared={target.counter.getDoneRound()}
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
