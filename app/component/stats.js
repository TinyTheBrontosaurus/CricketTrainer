import React, { Component } from 'react';

import { Row, Col, Grid } from "react-native-easy-grid";
import {
    Text
} from 'react-native';


/**
 * Several rows of statistics
 */
export default class Stats extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <Grid>
            {this.rowx2('Round:', this.props.stats.currentRound)}
            {this.rowx2('Hits / round:', this.props.stats.hitsPerRound)}
            {this.rowx2('Throws', `${this.props.stats.totalThrows}`)}
            {this.rowx2('Hits', `${this.props.stats.hitCount}`)}
            {this.rowx2('Misses', `${this.props.stats.missCount}`)}
        </Grid>
    );
  }

  rowx2(label, value) {
        return <Row>
            <Col>
                <Text>
                    {label}
                </Text>
            </Col>
            <Col>
                <Text>
                    {value}
                </Text>
            </Col>
        </Row>
  }
};
