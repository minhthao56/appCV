/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

export const GeneralCV1 = () => {
  return (
    <View
      style={{
        backgroundColor: '#E5E5E5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Neomorph
        darkShadowColor="#343434" // <- set this
        lightShadowColor="white" // <- this
        style={{
          shadowOpacity: 0.2, // <- and this or yours opacity
          shadowRadius: 15,
          borderRadius: 100,
          backgroundColor: '#DDD',
          width: 200,
          height: 200,
        }}
        // inner
      />
      <Neomorph
        inner // <- enable shadow inside of neomorph
        swapShadows // <- change zIndex of each shadow color
        style={{
          shadowRadius: 10,
          borderRadius: 25,
          backgroundColor: '#DDDDDD',
          width: 150,
          height: 150,
        }}></Neomorph>
    </View>
  );
};
