import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Animated } from 'react-native';
import { Card } from 'react-native-elements';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    static navigationOptions = {
        title: 'Monthly Expenses Checklist',
    }

    render() {
        return (
            <ScrollView>
         
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    image: {

        height: 220,
        width: 350,
    },
    card: {

        backgroundColor: "white",
        borderWidth: 8,
    }

});
export default Home;