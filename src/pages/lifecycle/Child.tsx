import React, { Component } from "react";
import { Text, View } from "react-native";

class Child extends Component {

    constructor(props: any) {
        super(props)
        this.state = {
            counter: this.props.counter
        }
        console.log('child constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <View>
                <Text>Props: {this.props.counter}</Text>
            </View>
        )
    }
}

export default Child