import React, { Component, PropTypes } from 'react'
import ReactNativeART from 'ReactNativeART'
const {
  Group
} = ReactNativeART
import _ from 'lodash'
import * as color from 'app/src/constants/color'
import SecondTicker from 'app/src/components/ticker/second'
import MinutesTicker from 'app/src/components/ticker/minutes'
import RuiningEffect from 'app/src/art/shapes/ring/effect/ruining'
import DustEffect from 'app/src/art/shapes/ring/effect/dust'
import FinishEffect from 'app/src/art/shapes/ring/effect/finish'
import AnimatedRing from 'app/src/art/shapes/ring/animated'

const RING_RADIUS_SPAN = 10
const RING_RADIUS_INITIAL = 50
export default class TimeTicker extends Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    const { x, y, count, tick } = this.props
    let least = count - tick
    least = least < 0 ? 0 : least
    const seconds = least % 600 === 0 ? 600 : least % 600 // 0 -> 0, 12 -> 12, 600 -> 600, 601 -> 1
    let secondRingNum = Math.ceil(seconds / 60)
    if (seconds % 60 === 0) {
      secondRingNum += 1
    }
    if (least == 0) {
      secondRingNum = 1
    }
    let term = Math.floor(least / 600)
    if (least % 600 === 0) {
      term -= 1
    }
    let minuteRingNum = Math.floor(least / 600)
    if (least % 600 === 0 && least !== 0) {
      minuteRingNum -= 1
    }
    const radiusOffset = minuteRingNum * RING_RADIUS_SPAN
    return (
      <Group x={x} y={y}>
        {this._renderMinuteRings(least, minuteRingNum)}
        {this._renderRuiningRing(least, minuteRingNum)}
        {this._renderSecondRings(least, term, secondRingNum, radiusOffset)}
        {this._renderDust(least, secondRingNum, minuteRingNum, 7)}
        {this._renderDust(least, secondRingNum, minuteRingNum, 11)}
        {this._renderFinish(count - tick)}
      </Group>
    )
  }
  _renderMinuteRings(least, num) {
    const rings = _.range(num)
    return rings.map(index => {
      // 外周、かつ残り１秒では描画やめる
      if (!(index == rings.length - 1 && least % 600 == 1)) {
        return (
          <MinutesTicker
            key={index}
            radius={index * RING_RADIUS_SPAN + RING_RADIUS_INITIAL}
            stroke={this.props.tintColor}
            strokeWidth={1}
            />
        )
      }
    })
  }
  _renderRuiningRing(least, num) {
    if ((least % 600 === 1 || least % 600 === 0) && !(least === 1 || least === 0)) {
      return (
        <RuiningEffect
          radius={(num - 1) * RING_RADIUS_SPAN + RING_RADIUS_INITIAL}
          radiusSpan={RING_RADIUS_SPAN}
          stroke={this.props.tintColor}
          robeStrokeWidth={3}
          dustStrokeWidth={1}
          />
      )
    }
  }
  _renderSecondRings(least, term, secondRingNum, radiusOffset) {
    
    const rings = _.range(secondRingNum)
    return rings.map(index => {
      const second = rings.length - 1 == index ? least % 60 : 60
      return (
        <SecondTicker
          key={`${term}-${index}`}
          radius={index * RING_RADIUS_SPAN + RING_RADIUS_INITIAL + radiusOffset}
          second={second}
          stroke={this.props.tintColor}
          strokeWidth={1} />
      )
    })
  }
  _renderDust(least, secondRingNum, minuteRingNum, leastMod) {
    if (least % leastMod !== 0) {
      return
    }
    const minRadius = ((secondRingNum + minuteRingNum) * RING_RADIUS_SPAN) + RING_RADIUS_INITIAL + RING_RADIUS_SPAN
    return (
      <DustEffect
        minRadius={minRadius}
        stroke={this.props.tintColor}
        strokeWidth={1}
        />
    )
  }
  _renderFinish(least) {
    if (least > 0 || -5 > least) {
      return
    }
    return (
      <FinishEffect
        stroke={this.props.tintColor}
        strokeWidth={1}
        />
    )
  }
}

TimeTicker.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  tick: PropTypes.number.isRequired,
  tintColor: PropTypes.string
}

TimeTicker.defaultTypes = {
  tintColor: color.WHITE
}