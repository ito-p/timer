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

const RING_ROTATION_SPAN = 360 / 10
export default class RuiningEffect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      robe: 0,
      dustStart: 0,
      dustEnd: 0,
      secondStart: 0,
      secondEnd: 0,
      radius: this.props.radius
    }
  }
  componentDidMount(prevProps) {
    TimerMixin.setTimeout(
      ()=>{
        this.setState({
          robe: RING_ROTATION_SPAN
        })
      }
    , 10)
    TimerMixin.setTimeout(
      ()=>{
        this.setState({
          dustStart: 180
        })
      }
    , 100)
    TimerMixin.setTimeout(
      ()=>{
        this.setState({
          dustEnd: 180
        })
      }
    , 150)
    TimerMixin.setTimeout(
      ()=>{
        this.setState({
          secondStart: 360
        })
      }
    , 400)
  }
  render() {
    const { radius } = this.props
    return (
      <Group>
        {this._renderRuiningMinuteRing(10)}
        {this._renderDusts(10)}
        {this._renderSecondRings(10)}
      </Group>
    )
  }
  _renderRuiningMinuteRing(num) {
    const rings = _.range(num)
    return rings.map(index => {
      const degreeOffset = index * RING_ROTATION_SPAN
      return (
        <AnimatedRing
          key={index}
          radius={this.state.radius}
          start={degreeOffset + this.state.robe}
          end={degreeOffset + RING_ROTATION_SPAN}
          stroke={this.props.stroke}
          strokeWidth={this.props.robeStrokeWidth} />
      )
    })
  }
  _renderDusts(num) {
    const dusts = _.range(num)
    const { radius } = this.state
    const { radiusSpan } = this.props
    return dusts.map(index => {
      const degreeOffset = index * RING_ROTATION_SPAN
      const startAngle = index * RING_ROTATION_SPAN
      const endAngle = index * RING_ROTATION_SPAN + 180
      const startPoint = {
        x: Math.cos(startAngle * Math.PI / 180) * radius,
        y: Math.sin(startAngle * Math.PI / 180) * radius
      }
      const endPoint = {
        x: Math.cos(endAngle * Math.PI / 180) * (radius + radiusSpan * index),
        y: Math.sin(endAngle * Math.PI / 180) * (radius + radiusSpan * index)
      }
      const middlePoint = {
        x: (endPoint.x + startPoint.x) / 2,
        y: (endPoint.y + startPoint.y) / 2
      }
      return (
        <Group
          key={index}
          x={middlePoint.x}
          y={middlePoint.y}>
          <AnimatedRing
            key={index}
            radius={(radius) + (radiusSpan * index) / 2}
            start={startAngle + this.state.dustEnd}
            end={startAngle + this.state.dustStart}
            stroke={this.props.stroke}
            strokeWidth={this.props.dustStrokeWidth} />
        </Group>
      )
    })
  }
  _renderSecondRings(num) {
    const rings = _.range(num)
    const { radius } = this.state
    const { radiusSpan } = this.props
    return rings.map(index => {
      const degreeOffset = index * RING_ROTATION_SPAN + 180
      return (
        <AnimatedRing
          key={index}
          radius={radius + radiusSpan * index}
          start={degreeOffset + this.state.secondEnd}
          end={degreeOffset + this.state.secondStart}
          stroke={this.props.stroke}
          strokeWidth={this.props.dustStrokeWidth} />
      )
    })
  }
}

RuiningEffect.propTypes = {
  radius: PropTypes.number.isRequired,
  radiusSpan: PropTypes.number.isRequired,
  stroke: PropTypes.string,
  robeStrokeWidth: PropTypes.number,
  dustStrokeWidth: PropTypes.number
}

RuiningEffect.defaultProps = {
  stroke: color.WHITE,
  robeStrokeWidth: 3,
  dustStrokeWidth: 1
}