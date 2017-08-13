import React, { Component } from 'react';
import {THROWS_PER_ROUND} from "../model/round"
import ThreeIconButton from "../component/three-icon-button.js"
import {
    View,
} from 'react-native';


export default class PerRoundControl extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent:"space-between"}}>
                    <ThreeIconButton
                        text={`Hit all ${THROWS_PER_ROUND}`}
                        style={styles.roundButton}
                        symbolBool={[true, true, true]}
                        onPress={() => this.props.onHitAllThisRound()}
                    />
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent:"space-between"}}>
                    {[...new Array(THROWS_PER_ROUND)].map((x, index) =>
                        <ThreeIconButton
                            key={`MissOnceCol2${index}`}
                            text={`Miss #${index + 1}`}
                            style={styles.roundButton}
                            symbolBool={[index !== 0, index !== 1, index !== 2]}
                            onPress={() => this.props.onMissOneThisRound(index)}

                        />
                    )}
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent:"space-between"}}>
                    {[...new Array(THROWS_PER_ROUND)].map((x, index) =>
                        <ThreeIconButton
                            key={`HitOnceCol2${index}`}
                            text={`Hit #${index + 1}`}
                            style={styles.roundButton}
                            symbolBool={[index === 0, index === 1, index === 2]}
                            onPress={() => this.props.onHitOneThisRound(index)}
                        />
                    )}
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent:"space-between"}}>
                    <ThreeIconButton
                        text={`Miss all ${THROWS_PER_ROUND}`}
                        style={styles.roundButton}
                        symbolBool={[false, false, false]}
                        onPress={() => this.props.onMissAllThisRound()}
                    />
                </View>
            </View>
        );
    };
};

let styles = {
    roundButton: {backgroundColor: "#ccffcc", flex: 1, height: "45%", marginLeft: 5, marginRight: 5},
};
