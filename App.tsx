import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStore } from 'redux';
import Counter from './src/pages/Counter';
import { Provider } from 'react-redux'

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 }
    case 'DECREASE_COUNTER':
      return { counter: state.counter - 1 }
    default:
      break;
  }
  return state
}

const store = createStore(reducer)

export default class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Counter />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
