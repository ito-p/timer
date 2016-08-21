import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import * as color from 'app/src/constants/color'

export default class BreadCramb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      crambs: []
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderCramb()}
      </View>
    );
  }
  _renderCramb() {
    const { crambs } = this.props
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {this._renderItems(crambs)}
      </View>
    )
  }
  _renderItems(crambs) {
    return crambs.map((cramb, index) => {
      if (crambs.length > index + 1) {
        return (
          <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}>
            {this._renderItem(cramb, index)}
            <View style={styles.column}>
              <Text style={styles.arrowText}>></Text>
            </View>
          </View>
        )
      }
      return this._renderItem(cramb, index)
    })
  }
  _renderItem(cramb, index) {
    return (
      <TouchableOpacity
        key={index}
        onPress={()=>{
          if (index + 1 < this.props.crambs.length)
          {
            this.props.onPress(index)
          }
        }}
        >
        <View style={styles.column}>
          <Text style={styles.termText}>{cramb.label}</Text>
          <Text style={styles.selectedText}>{cramb.value}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  column: {
    flexDirection: 'column',
    justifyContent:'center',
  },
  termText: {
    color: color.GRAY,
    fontSize: 8,
    marginBottom: 4
  },
  selectedText: {
    color: color.WHITE,
    fontSize: 16
  },
  arrowText: {
    color: color.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10
  }
});

BreadCramb.propTypes = {
  crambs: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired
}