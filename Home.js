import React, { Component } from 'react';
import { View, Text,TextInput,Button } from 'react-native';
import * as firebase from 'firebase'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        //   this.props.navigation.navigate("Home")
        alert("welcome to home")
      }
      else{
        this.props.navigation.navigate("Login")
      }
    })
}

  render() {
    return (
      <View>
        <Text> Home </Text>

<Button title="logout" onPress={() => firebase.auth().signOut()} />
        
      </View>
    );
  }
}
