/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Firebase = require('firebase');

class FB_test extends Component{
  consructor(props){
    //super(props);
    var My_FB_test = new Firebase('https://intense-inferno-227.firebaseio.com/');

    My_FB_test.set({
      title: 'hello world',
      author:'chuck'
    });
  }
}

class craze extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native test !
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
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

AppRegistry.registerComponent('craze', () => craze);
