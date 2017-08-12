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

          let colors = boardColors[target.getLabel()];
          if(disabled) {
              colors = inactive;
          }
          rows.push(
                  <View key={targeti} style={{
                      flex: 1,
                      flexDirection: 'column',
                      borderRadius: 4,
                      borderWidth: 5,
                      borderColor: colors.border,
                      backgroundColor: colors.background}}>
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

inactive = {border: '#f5f5f5', background: '#f5f5f5'};
beige = {border: '#e29836', background: '#f9e8d2'};
black = {border: '#333333', background: '#e6e6e6'};
green = {border: '#1f7a1f', background: '#d6f5d6'};
boardColors = {
    '20': black,
    '19': beige,
    '18': black,
    '17': beige,
    '16': beige,
    '15': beige,
    'B': green
};

AppRegistry.registerComponent('Board', () => Board);
