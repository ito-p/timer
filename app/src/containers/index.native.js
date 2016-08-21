import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'

import * as color from 'app/src/constants/color'
import Timer from 'app/src/containers/timer'
import Library from 'app/src/containers/library'

const { height, width } = Dimensions.get('window')

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Image
        source={require('app/data/images/background/nightsky.jpg')}
        width={width}
        height={height}
        style={{width: width, height: height}}
        resizeMode={'cover'}
        >
        <Swiper
          style={styles.wrapper}
          loop={false}
          width={width}
          height={height}
          activeDot={<View style={{backgroundColor: color.WHITE, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          >
          <View style={styles.slide1}>
            <Timer
                width={width}
                height={height}/>
          </View>
          <View style={styles.slide2}>
            <Library
              width={width}
              height={height}
              />
          </View>
        </Swiper>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  contents: {
    flex:1,
  },
  content: {
    flex: 1
  },
  tabbar: {
    height: 30
  }
});