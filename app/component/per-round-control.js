import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {THROWS_PER_ROUND} from "../model/round"
import ThreeIconButton from "../component/three-icon-button.js"
import Button from 'apsl-react-native-button'
import {
    View,
    Text
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
                        <Button
                            key={`HitOnceCol2${index}`}
                            onPress={() => this.props.onHitOneThisRound(index)}
                            style={styles.roundButton}>
                            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                                <View
                                    style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                    {[...new Array(THROWS_PER_ROUND)].map((x2, hitIndex) => {
                                        if(index !== hitIndex) {
                                            return <Icon
                                                name="times-circle-o"
                                                style={{color: 'red'}}
                                                size={styles.iconSize}/>
                                        }
                                        else {
                                            return <Icon
                                                name="check-circle-o"
                                                style={{color: 'green'}}
                                                size={styles.iconSize}/>
                                        }
                                    })
                                    }
                                </View>
                                <Text>Hit #{index + 1}</Text>
                            </View>
                        </Button>
                    )}
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent:"space-between"}}>
                    <Button
                        onPress={() => this.props.onMissAllThisRound()}
                        style={styles.roundButton}>
                        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                            <View
                                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                {[...new Array(THROWS_PER_ROUND)].map((x2, unusedIndex) => {
                                    return <Icon
                                        name="times-circle-o"
                                        style={{color: 'red'}}
                                        size={styles.iconSize}/>
                                })
                                }
                            </View>
                            <Text>Miss all {THROWS_PER_ROUND}</Text>
                        </View>
                    </Button>
                </View>
            </View>
        );
    };
};

let styles = {
    roundButton: {backgroundColor: "#ccffcc", flex: 1, height: "45%", marginLeft: 5, marginRight: 5},
    iconSize: 25
};
