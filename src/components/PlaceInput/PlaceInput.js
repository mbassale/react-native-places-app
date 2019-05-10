import React, { Component } from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

class PlaceInput extends Component {

    state = {
        placeName: null
    };

    placeNameChangedHandler = (value) => {
        this.setState({placeName: value});
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput style={styles.placeInput}
                           value={this.state.placeName}
                           placeholder="Place Name"
                           clearTextOnFocus
                           onChangeText={this.placeNameChangedHandler}/>
                <Button style={styles.placeButton}
                        title="Add"
                        onPress={this.placeSubmitHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
});

export default PlaceInput;