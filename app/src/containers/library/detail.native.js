import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SegmentedControlIOS
} from 'react-native'
import _ from 'lodash'
import Selector from 'app/src/containers/library/selector'
import Caption from 'app/src/components/text/caption'
import Description from 'app/src/components/text/description'
import BreadCramb from 'app/src/containers/library/breadcramb'

import * as color from 'app/src/constants/color'
import * as card from 'app/src/domain/dummycard'

const CATEGORIES = [
  {
    label: 'ALL',
    allows: [
      'general',
      'keyword',
      'work',
      'society',
      'character',
      'positive',
      'negative',
      'caution'
    ]
  },
  {
    label: '仕事',
    allows: [
      'keyword',
      'work',
      'positive'
    ]
  },
  {
    label: '人間関係',
    allows: [
      'keyword',
      'society',
      'character',
      'positive'
    ]
  },
  {
    label: '警告',
    allows: [
      'negative',
      'caution'
    ]
  }
]

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arcana: null,
      number: null,
      filterIndex: 0
    }
  }
  render() {
    const { arcana, suit, number } = this.props
    const json = card.getCardJson(arcana, suit, number)
    return (
      <View style={styles.container}>
        <SegmentedControlIOS
            values={CATEGORIES.map(category => { return category.label })}
            style={styles.segment}
            selectedIndex={this.state.filterIndex}
            onChange={(event) => {
              this.setState({filterIndex: event.nativeEvent.selectedSegmentIndex});
            }}
            tintColor={color.PRIMARY}
          />
        <ScrollView style={styles.contents}>
          <View style={styles.group}>
            <Text style={styles.label}>《カード名》</Text>
            <View style={styles.description}>
              <Text style={styles.text}>{json.name}</Text>
            </View>
          </View>
          {this._renderCaption('通称', json.alias)}
          {this._renderDetail('キーワード', json.keyword, 'keyword')}
          {this._renderDetail('一般', json.reading.general, 'general')}
          {this._renderDetail('仕事', json.reading.work, 'work')}
          {this._renderDetail('人物像', json.reading.character, 'character')}
          {this._renderDetail('人間関係／恋愛', json.reading.society, 'society')}
          {this._renderDetail('ポジティブ', json.reading.positive, 'positive')}
          {this._renderDetail('ネガティブ', json.reading.negative, 'negative')}
          {this._renderDetail('警告', json.reading.caution, 'caution')}
        </ScrollView>
      </View>
    );
  }
  _renderCaption(label, content, category=null) {
    if (content == null || (!_.contains(CATEGORIES[this.state.filterIndex].allows, category) && category != null)) {
      return <View />
    }
    return (
      <View style={styles.group}>
        <Text style={styles.label}>《{label}》</Text>
        <View style={styles.description}>
          <Caption
            content={content}
            />
        </View>
      </View>
    )
  }
  _renderDetail(label, content, category=null) {
    
    if (content == null || (!_.contains(CATEGORIES[this.state.filterIndex].allows, category) && category != null)) {
      return <View />
    }

    return (
      <View style={styles.group}>
        <Text style={styles.label}>《{label}》</Text>
        <View style={styles.description}>
          <Description
            content={content}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  contents: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  segment: {
    marginBottom: 12,
    marginHorizontal: 20
  },
  group: {
    marginBottom: 16
  },
  description: {
    marginLeft: 8
  },
  label: {
    fontSize: 14,
    color: color.GRAY,
    marginBottom: 8
  },
  text: {
    fontSize: 24,
    color: color.WHITE
  },
  detail: {
    fontSize: 20,
    lineHeight: 28,
    color: color.WHITE
  }
});

Detail.propTypes = {
  arcana: PropTypes.string,
  suit: PropTypes.string,
  number: PropTypes.number
}

Detail.defaultTypes = {
  arcana: null,
  suit: null,
  number: null
}