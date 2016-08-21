import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import * as color from 'app/src/constants/color'
import * as card from 'app/src/domain/dummycard'
import * as sources from 'app/src/domain/sources'

export default class Description extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { content } = this.props
    const keys = Object.keys(content)
    return (
      <View>
        {keys.map(key => {
          return (
            <View key={key}>
              <Text style={styles.text}>{content[key]}</Text>
              <Text style={styles.source}>{sources.getName(key)}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: color.WHITE,
    lineHeight: 24,
    fontFamily: 'Helvetica',
    marginBottom: 4
  },
  source: {
    fontSize: 12,
    color: color.GRAY,
    textAlign: 'right',
    marginBottom: 8
  }
});

Description.propTypes = {
  content: PropTypes.object.isRequired
}