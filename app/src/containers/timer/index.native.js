import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import ReactART from 'ReactNativeART'
import TimerMixin from 'react-timer-mixin'
import IdleTimerManager from 'react-native-idle-timer'
import * as color from 'app/src/constants/color'
import TimeTicker from 'app/src/components/ticker/time'
import TimerText from 'app/src/components/timer/text'
const {
  Surface,
  Group,
  Path,
  Shape
} = ReactART

const tintColor = color.WHITE
export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tick: 0
    }
    this._timestamp = new Date()
  }
  componentWillMount() {
    return IdleTimerManager ? IdleTimerManager.setIdleTimerDisabled(true): true
  }
  componentWillUnmount() {
    return IdleTimerManager ? IdleTimerManager.setIdleTimerDisabled(false): true
  }
  componentDidMount() {
    TimerMixin.setInterval(
      ()=>{
        const now = new Date()
        const diff = Math.floor((now - this._timestamp) / 1000)
        if (diff !== this.state.tick) {
          this.setState({
            tick: diff
          })
        }
      }
    , 50)
  }
  render() {
    const {width, height} = this.props
    const cx = width/2
    const cy = height/2
    const count = 671
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Surface width={width} height={height}>
            <Group x={cx} y={cy} rotation={-90}>
              <TimeTicker
                x={0}
                y={0}
                tick={this.state.tick}
                radius={60}
                count={count}
                tintColor={tintColor}
                />
            </Group>
          </Surface>
        </View>
        <View style={[styles.textContainer, {width: width, height: height}]}>
          <TimerText tick={this.state.tick} count={count} tintColor={tintColor}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    position: 'absolute'
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contents: {
    flex: 1
  },
  breadcramb: {
    height: 50
  }
});

Timer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

Timer.defaultTypes = {
  width: 400,
  height: 400
}