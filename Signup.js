import React, { Component } from 'react';
import { View, Text,TextInput,Button } from 'react-native';
import * as firebase from 'firebase'

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:"",
        pass:""
    };
  }

  Login = () =>{
      firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.pass).then(res => {
          alert("you are logged in")
      }).catch(e => {
          console.log(e)
          alert("unable to login")
      })

      firebase.database().ref("users").push({
          email:this.state.email,
          password:this.state.pass,
          name:"ali",
          ageL:21
      })
  }

  render() {
    return (
      <View style={{width:"100%",flex:1,justifyContent:"center",alignItems:"center"}}>
        <TextInput onChangeText={(val) => this.setState({email:val})} placeholder="email"></TextInput>
        <TextInput onChangeText={(val) => this.setState({pass:val})} placeholder="password"></TextInput>
        <Button title="Signup" onPress={() => this.Login()}  />
      </View>
    );
  }
}
