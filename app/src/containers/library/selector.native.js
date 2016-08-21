import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ArcanaSelector from 'app/src/components/selector/arcana'
import MinorSelector from 'app/src/components/selector/minor'
import * as color from 'app/src/constants/color'
import * as arcana from 'app/src/domain/arcana'

export default class Selector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arcana: null,
      suit: null,
      number: null
    }
  }
  render() {
    const { arcana, number } = this.props
    return (
      <View style={styles.container}>
        {arcana == null
          ? <ArcanaSelector
              onUpdate={this._update.bind(this)}/>
          : <View />
        }
        {arcana !== null && number == null
          ? <MinorSelector
              onUpdate={this._update.bind(this)}/>
          : <View />
        }
      </View>
    );
  }
  _update(state) {
    this.setState(state)
    this.props.onUpdate(state)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

Selector.propTypes = {
  arcana: PropTypes.string,
  number: PropTypes.number,
  onUpdate: PropTypes.func.isRequired
}

Selector.defaultProps = {
  arcana: null,
  number: null
}