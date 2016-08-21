import React, { Component, PropTypes } from 'react'
import TimerMixin from 'react-timer-mixin';
import ReactNativeART from 'ReactNativeART'
const {
  Group
} = ReactNativeART

import * as color from 'app/src/constants/color'
import AnimatedRing from 'app/src/art/shapes/ring/animated'

const STROKE_WIDTH = 3

export default class MinutesTicker extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      start: 0,
      end: 360,
      radius: 0
    }
  }
  componentDidMount(){
    TimerMixin.setTimeout(
      () => {
        this.setState({
          radius: this.props.radius,
          end: 360
        })
      },
      10
    )
  }
  render() {
    const { x, y } = this.props 
    return (
      <Group x={x} y={y}>
        <AnimatedRing
          radius={this.state.radius}
          start={this.state.start}
          end={this.state.end}
          stroke={this.props.stroke}
          strokeWidth={STROKE_WIDTH} />
      </Group>
    )
  }
}

MinutesTicker.propTypes = {
  radius: PropTypes.number.isRequired,
  x: PropTypes.number,
  y: PropTypes.number
}

MinutesTicker.defaultTypes = {
  x: 0,
  y: 0
}