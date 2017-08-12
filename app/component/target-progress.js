import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


/**
 * A single target for displaying its progress in the darts game. Shows a button that can hit next
 * to its progress.
 */
export default class TargetProgress extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View style={styles.container}>
            <Text style={this.props.disabled ? styles.inactiveTarget : styles.activeTarget}>
                {this.props.label}
            </Text>
            <Text>{this.getHitsSymbol()}</Text>
            <Text>{(this.props.cleared || "-").toString()}</Text>
        </View>
    }

    /**
     * Cricket progress is typically marked by a \, X, then (X) on a chalkboard. Do the best with
     * ASCII art here to return that
     * @returns {*} Symbol based on number of hits
     */
    getHitsSymbol() {
        switch(this.props.hits) {
            case 0:
                return '-';
            case 1:
                return '\\';
            case 2:
                return 'X';
            case 3:
            default:
                return 'O';
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        verticalAlign: 'center',
        justifyContent: "space-around",
        alignItems: "center"
    },
    baseText: {
        fontFamily: 'Cochin',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    inactiveTarget: {
    },
    activeTarget: {
        fontWeight: 'bold',
    },
});


AppRegistry.registerComponent('TargetProgress', () => TargetProgress);
