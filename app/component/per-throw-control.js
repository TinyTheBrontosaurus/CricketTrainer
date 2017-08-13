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
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Button
                onPress={this.props.onHit}
                title={"Hit"}
                textStyle={{fontSize: 18}}
                accessibilityLabel={"Hit target"}
                color="#841584"
            ><View><Icon
                name="check-circle-o"
                style={{color: 'green'}}
            /><Text>2Hit2</Text>
            </View>
            </Button>
            <Icon
                name="times-circle-o"
                style={{color: 'red'}}
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
