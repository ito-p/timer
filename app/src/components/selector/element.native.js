import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import * as color from 'app/src/constants/color'
import * as element from 'app/src/domain/element'

const CIRCLE_SIZE = 100

export default class ElementSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      element: null,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contents}>
          <View style={styles.up}>
            <TouchableOpacity
              onPress={()=>{
                this._update(element.FIRE)
              }}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>火</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.middle}>
            <TouchableOpacity
              onPress={()=>{
                this._update(element.EARTH)
              }}>
              <View style={[styles.circle, {marginRight: 10}]}>
                <Text style={styles.circleText}>地</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{
                this._update(element.TEMPLE)
              }}>
              <View style={[styles.circle, {marginRight: 10}]}>
                <Text style={styles.circleText}>神</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{
                this._update(element.WIND)
              }}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>風</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={()=>{
                this._update(element.WATER)
              }}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>水</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  _update(element) {
    this.props.onUpdate({element: element})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  contents: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  top: {

  },
  middle: {
    flexDirection: 'row',
    marginVertical: 10
  },
  bottom: {

  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderColor: color.WHITE,
    borderWidth: 2,
    borderRadius: CIRCLE_SIZE / 2,
    justifyContent: 'center',
  },
  circleText: {
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: color.WHITE
  }

});

ElementSelector.propTypes = {
  onUpdate: PropTypes.func.isRequired
}