/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import IconFeather from 'react-native-vector-icons/dist/Feather';

export const HeaderGeneralCV2 = ({navigation}) => {
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Neomorph
          darkShadowColor="#888"
          lightShadowColor="white"
          inner
          style={{
            shadowOpacity: 0.8,
            shadowRadius: 5,
            borderRadius: 50,
            backgroundColor: '#3BEDED',
            width: 46,
            height: 46,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconFeather name="chevron-left" size={28} color="white" />
        </Neomorph>
      </TouchableOpacity>
    </View>
  );
};
