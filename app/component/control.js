import React, { Component } from 'react';

import { Row, Grid } from "react-native-easy-grid";
import {
    Button
} from 'react-native';

export default class Control extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <Grid>
            <Row>
                <Button
                    onPress={this.props.onHit}
                    title={"Hit"}
                    accessibilityLabel={"Hit target"}
                    color="#841584"
                />
            </Row>
            <Row>
            <Button
              onPress={this.props.onMiss}
              title={"Miss"}
              accessibilityLabel={"Miss target"}
              color="#841584"
              />
            </Row>
            <Row>
                <Button
                    onPress={this.props.onMissx3}
                    title={"Miss rest"}
                    accessibilityLabel={"Miss rest of round"}
                    color="#841584"
                />
            </Row>
        </Grid>
    );
  }
};
