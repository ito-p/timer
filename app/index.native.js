/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Actions, Scene, Router, Reducer, Modal} from 'react-native-router-flux';
import * as color from 'app/src/constants/color'
import Index from 'app/src/containers/index'

class app extends Component {
  constructor(props) {
    super(props)
  }
  _reducerCreate(params) {
    const defaultReducer = Reducer(params);
    return (state, action)=>{
      return defaultReducer(state, action);
    }
  }
  render() {
    return (
      <Router createReducer={this._reducerCreate} sceneStyle={{backgroundColor:'transparent'}}>
        <Scene key='Index' component={Index} hideNavBar={true} />
      </Router>
    );
  }
}

AppRegistry.registerComponent('app', () => app);
