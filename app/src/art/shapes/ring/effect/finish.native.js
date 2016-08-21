import React, { Component, PropTypes } from 'react'
import TimerMixin from 'react-timer-mixin'
import { Animated } from 'react-native'
import ReactNativeART from 'ReactNativeART'
const {
  Group
} = ReactNativeART
import _ from 'lodash'
import * as color from 'app/src/constants/color'
import DustEffect from 'app/src/art/shapes/ring/effect/dust'

export default class FinishEffect extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Group>
        {this._renderDust(20)}
      </Group>
    )
  }
  _renderDust(num) {
    const stars = _.range(num)
    return stars.map(star => {
      return (
        <DustEffect
          key={star}
          minRadius={ star * 15 }
          maxRadius={0}
          angleRange={90}
          angleInit={90}
          delay={ star * 100 }
          stroke={this.props.stroke}
          strokeWidth={this.props.strokeWidth}
          />
      )
    })
  }
}

FinishEffect.propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
}

FinishEffect.defaultProps = {
  stroke: color.WHITE,
  strokeWidth: 1
}