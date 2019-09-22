import React, { Component } from 'react';
import { View, Text } from 'react-native';
import './config';
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from 'react-navigation-stack'
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Stack />
    );
  }
}

const StackNavigator = createStackNavigator({
  Login:{
    screen:Login
  },
  Signup:{
    screen:Signup
  },
  Home:{
    screen:Home
  }
},{
  headerMode:"none",
  initialRouteName:"Login"
})

const Stack = createAppContainer(StackNavigator)

