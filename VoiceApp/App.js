import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
var tts = require('react-native-android-speech')

import Voice from 'react-native-voice';
export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  }
  test() {
    tts.speak({
    text:'Please provide some text to speak.', // Mandatory
    pitch:1.5, // Optional Parameter to set the pitch of Speech,
    forceStop : false , //  Optional Parameter if true , it will stop TTS if it is already in process
    language : 'en', // Optional Paramenter Default is en you can provide any supported lang by TTS
    country : 'US' // Optional Paramenter Default is null, it provoques that system selects its default
    }).then(isSpeaking=>{
        console.log(isSpeaking);
    }).catch(error=>{
        //Errror Callback
        console.log(error)
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text >Voice</Text>
        <TouchableOpacity
           onPress={ () => this.test() }>
           <Text >Voice Click</Text>
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
