import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text
} from 'react-native';

import { Col, Grid } from "react-native-easy-grid";


/**
 * A single target for displaying its progress in the darts game. Shows a button that can hit next
 * to its progress.
 */
export default class TargetProgress extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Grid>
            <Col size={1}>
                <Button
                    onPress={this.props.callback}
                    title={"" + this.props.label}
                    accessibilityLabel={"Hit target " + this.props.label}
                    disabled={this.props.disabled}
                    color="#841584"
                />
            </Col>
            <Col size={1}>
                <Text>{this.getHitsSymbol()}</Text>
            </Col>
            <Col size={1}>
                <Text>{(this.props.closedRound || "-").toString()}</Text>
            </Col>
        </Grid>
    }

    /**
     * Cricket progress is typically marked by a \, X, then (X) on a chalkboard. Do the best with
     * ASCII art here to return that
     * @returns {*} Symbol based on number of hits
     */
    getHitsSymbol() {
        switch(this.props.hits) {
            case 0:
                return '-';
            case 1:
                return '\\';
            case 2:
                return 'X';
            case 3:
            default:
                return 'O';
        }
    }
}

AppRegistry.registerComponent('TargetProgress', () => TargetProgress);
