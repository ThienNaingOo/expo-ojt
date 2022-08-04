import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'

class Counter extends Component {

    constructor(props: any) {
        super(props)
        console.log(this.props.counter);

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <Button title=' + ' onPress={() => this.props.increseCounter()}>
                    </Button>
                    <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                    <Button title=' - ' onPress={() => this.props.decreseCounter()}>
                    </Button>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        increseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
