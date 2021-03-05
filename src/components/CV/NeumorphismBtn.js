/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

export default function NeumorphismBtn({MainColor, children}) {
  return (
    <Neomorph
      darkShadowColor="#999" // <- set this
      lightShadowColor="white" // <- this
      style={{
        shadowOpacity: 0.6, // <- and this or yours opacity
        shadowRadius: 6,
        borderRadius: 20,
        backgroundColor: '#DDD',
        width: 190,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
      }}>
      <View
        style={{
          borderWidth: 1.5,
          borderColor: 'white',
          borderRadius: 16,
          flexDirection: 'row',
          alignItems: 'center',
          height: 44,
          width: 180,
          justifyContent: 'space-around',
        }}>
        {children}
      </View>
    </Neomorph>
  );
}
