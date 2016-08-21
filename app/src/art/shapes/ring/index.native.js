import React, { Component, PropTypes } from 'react';
import { Surface, Shape, Path, Group } from 'ReactNativeART';
import { getArcPath } from 'app/src/domain/figure/path'

export default class Ring extends Component {
  render() {
    const { radius, strokeWidth, stroke, start, end } = this.props
    const circlePath = getArcPath(0, 0, radius, start, end)
    return (
      <Shape d={circlePath}
             stroke={stroke}
             strokeWidth={strokeWidth}
             strokeCap="butt"/>
    )
  }
}

Ring.propTypes = {
  radius: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  stroke: PropTypes.string,
}

Ring.defaultProps = {
  stroke: 'black'
}