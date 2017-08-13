import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {THROWS_PER_ROUND} from "../model/round"
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
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent:"space-between"}}>
                    {[...new Array(THROWS_PER_ROUND)].map((x, index) =>
                        <Button
                            key={`MissOnceCol2${index}`}
                            onPress={() => this.props.onMissOneThisRound(index)}
                            style={styles.roundButton}>
                            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                                <View
                                    style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                    {[...new Array(THROWS_PER_ROUND)].map((x2, missIndex) => {
                                        if(index === missIndex) {
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
                                <Text>Miss #{index + 1}</Text>
                            </View>
                        </Button>
                    )}
                </View>
            </View>
        );
    };
};

let styles = {
    roundButton: {backgroundColor: "#ccffcc", flex: 1, height: "45%", marginLeft: 5, marginRight: 5},
    iconSize: 25
};
