import { Platform } from 'react-native';
import ReactNativeART from 'ReactNativeART'
const {
  Shape,
  Path
} = ReactNativeART

export function getArcPath(cx, cy, r, startDegree, endDegree) {
  let p = Path()
  if (Math.abs((startDegree % 360) - endDegree) < 1) {
    return p
  }
  if (Platform.OS === 'ios') {
    const startRadian = startDegree * Math.PI / 180
    p.path.push(0, cx + Math.cos(startRadian) * r, cy + Math.sin(startRadian) * r)
    p.path.push(4, cx, cy, r, startDegree * Math.PI / 180, endDegree * Math.PI / 180, 1)
  } else {
    p.path.push(4, cx, cy, r, startDegree * Math.PI / 180, (startDegree - endDegree) * Math.PI / 180, 0)
  }
  return p
}