import React, { Component, PropTypes } from 'react'
import TimerMixin from 'react-timer-mixin'
import ReactNativeART from 'ReactNativeART'
const {
  Group,
  Shape
} = ReactNativeART

import * as color from 'app/src/constants/color'
import AnimatedRing from 'app/src/art/shapes/ring/animated'

const STATE_GENERATING = 'generating'
const STATE_TICKING = 'ticking'
export default class SecondTicker extends Component {
  constructor(props)
  {
    super(props)
    const end = 360
    const start = 360 - (this.props.second / 60 * 360)
    this.state = {
      status: STATE_TICKING,
      start: start,
      end: end
    }
  }
  componentDidMount() {
    if (this.props.second == 0) {
      return
    }
    /*TimerMixin.setTimeout(
      () => {
        this.setState({
          start: 0,
          end: 360,
          status: STATE_TICKING
        })
      },
      10
    )*/
  }
  render() {
    if (this.state.status == STATE_GENERATING) {
      return this._renderGenerating()
    }
    const { second, radius } = this.props
    const end = 360
    const start = 360 - (second / 60 * 360)
    return (
      <AnimatedRing
        radius={radius}
        start={start}
        end={end}
        stroke={this.props.stroke}
        strokeWidth={1} />
    )
  }
  _renderGenerating() {
    return (
      <AnimatedRing
        radius={this.props.radius}
        start={this.state.start}
        end={this.state.end}
        stroke={this.props.stroke}
        strokeWidth={1} />
      )
  }
}

SecondTicker.propTypes = {
  radius: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
}

SecondTicker.defaultTypes = {
  stroke: color.WHITE,
  strokeWidth: 1
}