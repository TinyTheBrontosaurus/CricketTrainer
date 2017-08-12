import React, { Component } from 'react';
let { Icon, } = require('react-native-icons');
import {
    Button
} from 'react-native';


export default class PerThrowControl extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Icon
                name="'fontawesome|facebook"
                />
            <Button
                onPress={this.props.onHit}
                title={"Hit"}
                accessibilityLabel={"Hit target"}
                color="#841584"
            />
            <Button
                onPress={this.props.onMiss}
                title={"Miss"}
                accessibilityLabel={"Miss target"}
                color="#841584"
            />
        </View>
    );
  }
};
