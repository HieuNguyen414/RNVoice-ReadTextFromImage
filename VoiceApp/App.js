// link: https://github.com/mihirsoni/react-native-android-speech

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
var Speech = require('react-native-android-speech')
import Voice from 'react-native-voice';

export default class App extends Component{

  speaktest() {
    Speech.speak({
    text:'Nguyễn Chánh Hiếu',
    pitch:1.5,
    forceStop : false ,
    language : 'vi',
    country : 'Vietnamese'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
           onPress={ () => this.speaktest() }>
           <Text >Speak</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
