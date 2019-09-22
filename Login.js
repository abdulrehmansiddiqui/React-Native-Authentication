import React, { Component } from 'react';
import { View, Text,TextInput,Button } from 'react-native';
import * as firebase from 'firebase'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:"",
        pass:""
    };
  }

  componentDidMount(){
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
            this.props.navigation.navigate("Home")
        }
      })
  }

  Login = () =>{
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.pass).then(res => {
        alert("you are logged in")
    }).catch(e => {
        console.log(e)
        alert("unable to login")
    })
}

  render() {
    return (
      <View style={{width:"100%",flex:1,justifyContent:"center",alignItems:"center"}}>
        <TextInput onChangeText={(val) => this.setState({email:val})} placeholder="email"></TextInput>
        <TextInput onChangeText={(val) => this.setState({pass:val})} placeholder="password"></TextInput>
        <Button title="login" onPress={() => this.Login()}  />
      </View>
    );
  }
}
