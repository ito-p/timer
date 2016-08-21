import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Selector from 'app/src/containers/library/selector'
import Detail from 'app/src/containers/library/detail'
import BreadCramb from 'app/src/containers/library/breadcramb'

import * as color from 'app/src/constants/color'
import * as arcana from 'app/src/domain/arcana'
import * as suit from 'app/src/domain/suit'
const BREADCRAMB_HEIGHT = 50
export default class Library extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arcana: null,
      suit: null,
      number: null
    }
  }
  render() {
    const { arcana, suit, number } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.breadcramb}>
          <BreadCramb
            crambs={this._buildCrambs()}
            onPress={index => {
              switch(index) {
                case 0:
                  this.setState({
                    arcana: null,
                    suit: null,
                    number: null
                  })
                case 1:
                  this.setState({
                    number: null
                  })
              }
            }}/>
        </View>
        <View style={[styles.contents, {height: this.props.height - BREADCRAMB_HEIGHT - 40}]}>
          {
            number === null
            ? <Selector
                arcana={arcana}
                suit={suit}
                number={number}
                onUpdate={this._updateQuery.bind(this)}/>
            : <Detail
                arcana={arcana}
                suit={suit}
                number={number} />
          }
        </View>
        
      </View>
    );
  }
  _updateQuery(state) {
    this.setState(state)
  }
  _buildCrambs() {
    let crambs = [{
      label: 'アルカナ',
      value: 'アルカナ選択'
    }]
    if (this.state.suit) {
      crambs.push({
        label: 'スート',
        value: suit.getSuitName(this.state.suit)
      })
    }
    if (this.state.arcana && this.state.number !== null) {
      crambs.push({
        label: 'カード',
        value: arcana.getCardName(this.state.arcana, this.state.number)
      })
    }
    return crambs
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  contents: {
    flex: 1
  },
  breadcramb: {
    height: BREADCRAMB_HEIGHT
  }
});

Library.propTypes = {
  height: PropTypes.number.isRequired
}