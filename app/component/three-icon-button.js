import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {THROWS_PER_ROUND} from "../model/round"
import Button from 'apsl-react-native-button'
import {
    View,
    Text
} from 'react-native';


export default class ThreeIconButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button
                key={this.props.key}
                onPress={this.props.onPress}
                style={this.props.style}>
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                    <View
                        style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        {[...new Array(THROWS_PER_ROUND)].map((x, index) => {
                            if(this.props.symbolBool[index]) {
                                return <Icon
                                    name="check-circle-o"
                                    style={{color: 'green'}}
                                    size={styles.iconSize}/>

                            }
                            else {
                                return <Icon
                                    name="times-circle-o"
                                    style={{color: 'red'}}
                                    size={styles.iconSize}/>
                            }
                            })
                        }
                    </View>
                    <Text>{this.props.text}</Text>
                </View>
            </Button>
        );
    };
};

let styles = {
    iconSize: 25
};
