import { Animated } from 'react-native'

const fadeIn = (animation) => {
  Animated.timing(animation, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }).start()
}

const fadeOut = () => {
  Animated.timing(animation, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  }).start()
}

export { fadeIn, fadeOut }
