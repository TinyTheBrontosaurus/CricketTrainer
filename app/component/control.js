import React, { Component } from 'react';
import {THROWS_PER_ROUND} from "../model/round"
import { Row,Col,  Grid } from "react-native-easy-grid";
import {
    Button
} from 'react-native';


/**
 * Shows the basic Hit/Miss/End Round controls for Cricket
 */
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
                    onPress={this.props.onHitAllThisRound}
                    title={"Hit all"}
                    accessibilityLabel={"Hit all"}
                    color="#841584"
                />
            </Row>
            <Row>
                {[...new Array(THROWS_PER_ROUND)].map((x, index) =>
                    <Col key={`MissOnceCol${index}`}>

                        <Button
                            onPress={() => this.props.onMissOneThisRound(index)}
                            title={`Miss #${index + 1}`}
                            accessibilityLabel={`Miss #${index + 1}`}
                            color="#841584"
                        />
                    </Col>
                )}
            </Row>
            <Row>
                {[...new Array(THROWS_PER_ROUND)].map((x, index) =>
                    <Col key={`HitOnceCol${index}`}>

                        <Button
                            onPress={() => this.props.onHitOneThisRound(index)}
                            title={`Hit #${index + 1}`}
                            accessibilityLabel={`Hit #${index + 1}`}
                            color="#841584"
                        />
                    </Col>
                )}
            </Row>
            <Row>
                <Button
                    onPress={this.props.onMissRestOfRound}
                    title={"Miss rest"}
                    accessibilityLabel={"Miss rest of round"}
                    color="#841584"
                />
            </Row>
        </Grid>
    );
  }
};
