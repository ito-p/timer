import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import _ from 'lodash'
import * as color from 'app/src/constants/color'
import * as arcanas from 'app/src/domain/arcana'
import * as suit from 'app/src/domain/suit'

const CIRCLE_SIZE = 50

export default class ArcanaSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arcana: null,
      number: null
    }
  }
  render() {
    return (
      <View style={styles.contents}>
        <Text style={styles.title}>大アルカナ</Text>
        <View style={styles.row}>
          {this._renderCardNumbers(arcanas.MAJOR, 0, 21)}
        </View>
        <Text style={styles.title}>小アルカナ</Text>
        <View style={styles.row}>
          {this._renderCardSuits(arcanas.MINOR)}
        </View>
      </View>
    )
  }
  _renderCardNumbers(arcana, start, end) {
    return _.range(start, end + 1).map(index => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            this._updateMajor(arcana, index)
          }}
          style={styles.circle}>
          <Text style={styles.circleText}>{index}</Text>
        </TouchableOpacity>
      )
    })
  }
  _renderCardSuits(arcana) {
    const suits = suit.getSuits()
    return suits.map(suit => {
      return (
        <TouchableOpacity
          key={suit}
          onPress={() => {
            this._updateMinor(arcana, suit)
          }}
          style={styles.circle}>
          <Text style={styles.circleText}>{suit}</Text>
        </TouchableOpacity>
      )
    })
  }
  _updateMajor(arcana, number) {
    this.props.onUpdate({
      arcana: arcana,
      number: number
    })
  }
  _updateMinor(arcana, suit) {
    this.props.onUpdate({
      arcana: arcana,
      suit: suit
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16
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

ArcanaSelector.propTypes = {
  onUpdate: PropTypes.func.isRequired
}