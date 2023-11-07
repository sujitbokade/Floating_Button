import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const FloatingButton = props => {
  const [isClicked, setIsClicked] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  toggleMenu = () => {
    let toValue = isClicked ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    setIsClicked(!isClicked);
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };
  const pinStyle = {
    transform: [
      {scale: animation},
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 80],
        }),
      },
    ],
  };
  const likeStyle = {
    transform: [
      {scale: animation},
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 130],
        }),
      },
    ],
  };
  const heartStyle = {
    transform: [
      {scale: animation},
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 180],
        }),
      },
    ],
  };

  return (
    <View style={[styles.container, props.style]}>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary, heartStyle]}>
          <EvilIcons name="heart" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary, likeStyle]}>
          <EvilIcons name="like" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary, pinStyle]}>
          <EvilIcons name="location" size={20} color="#F02A4B" />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          toggleMenu();
        }}>
        <Animated.View style={[rotation, styles.button, styles.menu]}>
          <Entypo name="plus" size={24} color="#FFF" />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 10,
    right: 0,
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 10,
    shadowRadius: 10,
    shadowColor: '#F02A4B',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
  },
  menu: {
    backgroundColor: '#F02A4B',
  },
  secondary: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#FFF',
  },
});
