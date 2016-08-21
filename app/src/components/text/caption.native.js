import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import * as color from 'app/src/constants/color'
import * as card from 'app/src/domain/dummycard'
import * as sources from 'app/src/domain/sources'
import TextStyle from 'app/src/styles/text'

export default class Caption extends Component {
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
              <Text style={styles.label}>{content[key]}</Text>
              <Text style={TextStyle.source}>{sources.getName(key)}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    color: color.WHITE,
    marginBottom: 8
  }
});

Caption.propTypes = {
  content: PropTypes.object.isRequired
}