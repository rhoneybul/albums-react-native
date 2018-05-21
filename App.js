import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Header from './src/components/header';
import Albums from './src/components/albums';

class App extends Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
          <Header headerText={'Albums'}/>
          <Albums />
        </View>
    )
  }
}

export default App;