import React from 'react';
import { ScrollView, Animated } from 'react-native';
import style from './AgendaCss.js';
import { useFocusEffect } from '@react-navigation/native';
import { Calendary } from '../../component/Calendary/Calendary.js';
import Example from '../../component/Calendary/calendarioTest/teste.js';

export function Agenda() {
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
        {/* <Calendary/> */}
        <Example />

      </Animated.View>
    </ScrollView>
  );
}
