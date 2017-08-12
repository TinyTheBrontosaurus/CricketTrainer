import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

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
        <View style={{flex: 1, flexDirection: 'column'}}>
            {this.displayAsNumbers()}
        </View>
    );
  }

  displayAsNumbers() {
      let targets = this.props.scoreboard.getTargets();
      let activei = this.props.scoreboard.getActiveTargetIndex();
      let targetn = targets.length;
      let rows = [];
      for(let targeti = 0; targeti < targetn; targeti++) {
          let target = targets[targeti];
          let callback = () => {};
          let disabled = true;
          if(targeti === activei) {
              callback = this.props.onHit;
              disabled = false;
          }
          rows.push(
                  <View key={targeti} style={{flex: 1, flexDirection: 'column', backgroundColor: theColors[targeti]}}>
                      <TargetProgress label={target.getLabel()}
                                    hits={target.hits()}
                                    cleared={target.getDoneRound()}
                                    callback={callback}
                                    disabled={disabled} 
                                    />
                  </View>
          );
          disabled = true;
      }
      return rows;
  }
};

theColors = [
    'powderblue',
    'skyblue',
    'steelblue',
    'blue',
    'powderblue',
    'skyblue',
    'steelblue',
    'blue'
];
AppRegistry.registerComponent('Board', () => Board);
