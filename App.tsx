import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Home from './src/pages/home';
import Pan from './src/pages/pan';
import Parent from './src/pages/lifecycle/Parent';

export default function App() {
  return (
    // <GestureHandlerRootView style={{flex:1}}>
    //   <Pan />
    // </GestureHandlerRootView>
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
