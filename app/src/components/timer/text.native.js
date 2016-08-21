import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import _ from 'lodash'
import * as color from 'app/src/constants/color'

export default class TimerText extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { count, tick, tintColor } = this.props
    let least = Math.max(count - tick, 0)
    const second = least % 60
    const minute = Math.floor(least / 60)
    const secondFigure1 = second % 10
    const secondFigure2 = Math.floor(second / 10)
    const minuteFigure1 = minute % 10
    const minuteFigure2 = Math.floor(minute / 10)
    return (
      <View>
        <View style={styles.column}>
          <Text style={[styles.text, {color: tintColor}]}>{minuteFigure2}</Text>
          <Text style={[styles.text, {color: tintColor}]}>{minuteFigure1}</Text>
          <Text style={[styles.separator, {color: tintColor}]}>:</Text>
          <Text style={[styles.text, {color: tintColor}]}>{secondFigure2}</Text>
          <Text style={[styles.text, {color: tintColor}]}>{secondFigure1}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.PRIMARY,
    width: 15,
    textAlign: 'center'
  },
  separator: {
    marginTop: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: color.PRIMARY,
    width: 10,
    textAlign: 'center'
  },
  column: {
    flex: 1,
    flexDirection: 'row'
  }
});

TimerText.propTypes = {
  count: PropTypes.number.isRequired,
  tick: PropTypes.number.isRequired,
  tintColor: PropTypes.string
}

TimerText.defaultTypes = {
  tintColor: color.PRIMARY
}