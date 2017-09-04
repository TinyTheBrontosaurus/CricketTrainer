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
                    onPress={this.props.fullRoundHitAll}
                    title={"Hit all"}
                    accessibilityLabel={"Hit all"}
                    color="#841584"
                    disabled={!this.props.canPlayFullRound}
                />
            </Row>
            <Row>
                {[...new Array(THROWS_PER_ROUND)].map((x, index) =>
                    <Col key={`MissOnceCol${index}`}>

                        <Button
                            onPress={() => this.props.fullRoundMissOne(index)}
                            title={`Miss #${index + 1}`}
                            accessibilityLabel={`Miss #${index + 1}`}
                            color="#841584"
                            disabled={!this.props.canPlayFullRound}
                        />
                    </Col>
                )}
            </Row>
            <Row>
                {[...new Array(THROWS_PER_ROUND)].map((x, index) =>
                    <Col key={`HitOnceCol${index}`}>

                        <Button
                            onPress={() => this.props.fullRoundHitOne(index)}
                            title={`Hit #${index + 1}`}
                            accessibilityLabel={`Hit #${index + 1}`}
                            color="#841584"
                            disabled={!this.props.canPlayFullRound}
                        />
                    </Col>
                )}
            </Row>
            <Row>
                <Button
                    onPress={this.props.fullRoundMissAll}
                    title={"Miss all"}
                    accessibilityLabel={"Miss all"}
                    color="#841584"
                />
            </Row>
        </Grid>
    );
  }
};
