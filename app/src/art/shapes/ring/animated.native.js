import React, { Component, PropTypes } from 'react'
import { Animated, Easing } from 'react-native'
import Ring from './index'
const AnimatedRingComponent = Animated.createAnimatedComponent(Ring);

export default class AnimatedRing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      radiusAnimation: new Animated.Value(0 || this.props.radius),
      startAnimation: new Animated.Value(0 || this.props.start),
      endAnimation: new Animated.Value(0 || this.props.end),
    }
  }
  componentDidUpdate(prevProps) {
    this.tryAnimate('start', prevProps, this.props)
    this.tryAnimate('end', prevProps, this.props)
    this.tryAnimate('radius', prevProps, this.props)
  }
  tryAnimate(propName, prevProps, currentProps) {
    if (prevProps[propName] !== this.props[propName]) {
      this.animate(this.state[propName + 'Animation'], this.props[propName])
    }
  }
  animate(animation, prop) {
    Animated.timing(
      animation,
      {
        toValue: prop,
        easing: Easing.out(Easing.exp),
        duration: 500
      }
    ).start();
  }
  render() {
    const { radius, strokeWidth, stroke, start, end } = this.props
    return (
      <AnimatedRingComponent
        radius={this.state.radiusAnimation}
        start={this.state.startAnimation}
        end={this.state.endAnimation}
        stroke={stroke}
        strokeWidth={strokeWidth} />
    )
  }
}

AnimatedRing.propTypes = {
  radius: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired
}