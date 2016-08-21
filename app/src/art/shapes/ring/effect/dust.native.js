import React, { Component, PropTypes } from 'react'
import TimerMixin from 'react-timer-mixin'
import { Animated } from 'react-native'
import ReactNativeART from 'ReactNativeART'
const {
  Group
} = ReactNativeART
import _ from 'lodash'
import * as color from 'app/src/constants/color'
import AnimatedRing from 'app/src/art/shapes/ring/animated'

export default class DustEffect extends Component {
  constructor(props) {
    super(props)
    const { maxRadius } = this.props
    this.state = {
      dustStart: 0,
      dustEnd: 0,
      radius: Math.floor(Math.random() * maxRadius + this.props.minRadius),
      startAngle: Math.floor(Math.random() * 360)
    }
  }
  componentDidMount(prevProps) {
    const { angleRange, angleInit, delay } = this.props
    const endAngle = Math.floor(Math.random() * angleRange + angleInit)
    TimerMixin.setTimeout(
      ()=>{
        this.setState({
          dustStart: endAngle
        })
      }
    , 10 + delay)
    TimerMixin.setTimeout(
      ()=>{
        this.setState({
          dustEnd: endAngle
        })
      }
    , 30 + delay)
  }
  render() {
    const { minRadius } = this.props
    return (
      <Group>
        {this._renderDust(minRadius)}
      </Group>
    )
  }
  _renderDust(minRadius) {
    return (
      <AnimatedRing
        radius={this.state.radius}
        start={this.state.startAngle + this.state.dustEnd}
        end={this.state.startAngle + this.state.dustStart}
        stroke={this.props.stroke}
        strokeWidth={this.props.strokeWidth} />
    )
  }
}

DustEffect.propTypes = {
  maxRadius: PropTypes.number,
  minRadius: PropTypes.number.isRequired,
  angleRange: PropTypes.number,
  angleInit: PropTypes.number,
  delay: PropTypes.number,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number
}

DustEffect.defaultProps = {
  maxRadius: 100,
  angleRange: 30,
  angleInit: 30,
  delay: 0,
  stroke: color.WHITE,
  strokeWidth: 1
}