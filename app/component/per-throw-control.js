import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'apsl-react-native-button'
import {
    View,
    Text
} from 'react-native';


export default class PerThrowControl extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent:"space-between"}}>
                <Button
                    onPress={this.props.onHit}
                    style={styles.hitButton}>
                    <View
                        style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <Icon
                            name="check-circle-o"
                            style={{color: 'green'}}
                            size={60}/>
                        <Text>Hit</Text>
                    </View>
                </Button>
                <View style={{flex: .1}}/>
                <Button
                    onPress={this.props.onMiss}
                    style={styles.missButton}>
                    <View
                        style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <Icon
                            name="times-circle-o"
                            style={{color: 'red'}}
                            size={60}/>
                        <Text>Miss</Text>
                    </View>
                </Button>
            </View>
        );
    };
};

let styles = {
    hitButton: {backgroundColor: "#ccffcc", flex: 1, height: "45%"},
    missButton: {backgroundColor: "#ffcccc", flex: 1, height: "45%"}
};