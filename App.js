/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';


type Props = {};
export default class App extends Component<Props> {

    state = {
        places: [],
        selectedPlace: null
    };

    placeAddedHandler = (placeName) => {
        this.setState((prevState) => {
            return {
                places: prevState.places.concat({
                    key: Math.random().toString(),
                    name: placeName,
                    image: {
                        uri: 'https://source.unsplash.com/800x600/?nature,water'
                    }
                })
            };
        })
    };

    placeSelectedHandler = (key) => {
        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find(place => {
                    return place.key === key;
                })
            };
        });
    };

    placeDeletedHandler = () => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter(place => {
                    return place.key !== prevState.selectedPlace.key;
                }),
                selectedPlace: null
            };
        });

    };

    modalClosedHandler = () => {
        this.setState({
            selectedPlace: null
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail selectedPlace={this.state.selectedPlace}
                             onItemDeleted={this.placeDeletedHandler}
                             onModalClosed={this.modalClosedHandler}/>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
                <PlaceList places={this.state.places}
                           onItemSelected={this.placeSelectedHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});
