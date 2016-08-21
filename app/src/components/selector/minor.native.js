import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import _ from 'lodash'
import * as color from 'app/src/constants/color'
import * as suit from 'app/src/domain/suit'

const CIRCLE_SIZE = 50

export default class MinorSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suit: null,
      number: null
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contents}>
          <Text style={styles.title}>小アルカナ</Text>
          <View style={styles.row}>
            {this._renderCardNumbers(1, 14)}
          </View>
        </View>
      </View>
    )
  }
  _renderCardNumbers(start, end) {
    return _.range(start, end + 1).map(index => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            this._update(index)
          }}
          style={styles.circle}>
          <Text style={styles.circleText}>{this._getInitial(index)}</Text>
        </TouchableOpacity>
      )
    })
  }
  _getInitial(index) {
    switch(index) {
      case 11: return '騎士'
      case 12: return '女王'
      case 13: return '王子'
      case 14: return '王女'
      default:
        return index
    }
  }
  _update(number) {
    this.props.onUpdate({
      number: number
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contents: {
    margin: 30
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 16,
    color: color.GRAY,
    marginLeft: 8,
    marginBottom: 8
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderColor: color.WHITE,
    borderWidth: 2,
    borderRadius: CIRCLE_SIZE / 2,
    justifyContent: 'center',
    margin: 6
  },
  circleText: {
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: color.WHITE
  }
});

MinorSelector.propTypes = {
  onUpdate: PropTypes.func.isRequired
}