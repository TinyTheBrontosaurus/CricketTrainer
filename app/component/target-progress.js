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

import { Col, Grid } from "react-native-easy-grid";


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
                <Text>{this.props.cleared}</Text>
            </Col>
        </Grid>
    }

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
