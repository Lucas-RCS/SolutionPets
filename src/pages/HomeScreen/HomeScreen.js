import React from 'react';
import { ScrollView, Animated } from 'react-native';
import style from './HomeCss.js';
import { useFocusEffect } from '@react-navigation/native';

export function Home() {
  const translateYAnim = new Animated.Value(10);
  const opacityAnim = new Animated.Value(0);

  useFocusEffect(() => {
    Animated.timing(translateYAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();

    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();

    return () => {
      translateYAnim.setValue(10);
      opacityAnim.setValue(0);
    };
  });

  return (
    <ScrollView style={style.container}>
      <Animated.View
        style={[
          style.animatedContainer,
          {
            transform: [{ translateY: translateYAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
       




      </Animated.View>
    </ScrollView>
  );
}