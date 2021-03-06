/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {useIsFocused} from '@react-navigation/core';
import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  Animated,
  Platform,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';

import {CardMyCV} from '../../components';
import {Button, Header} from '../../components/common';
import BgModal from '../../assets/images/bgModal.png';
import CVImage from '../../assets/images/cv2.png';

const {height, width} = Dimensions.get('window');
const ITEM_SIZE = 255;
export const CV = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [isShowModalDelete, setIsShowModalDelete] = useState();
  const isFocused = useIsFocused();
  const handleDeleteCV = (i) => {
    setIsShowModalDelete(true);
  };
  const handleDetailCV = () => {
    navigation.navigate('GeneralCV2');
  };
  return (
    <>
      {isFocused ? <StatusBar backgroundColor="rgba(0,0,0,0.85)" /> : null}
      <View style={styles.container}>
        <View style={{paddingHorizontal: 16, paddingTop: 16, marginBottom: 32}}>
          <Header
            onPress={() => navigation.navigate('CreateCV')}
            goBack={() => navigation.goBack()}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: 32,
            marginBottom: 32,
          }}>
          <Button title={'CV'} isActive={true} />
          <Button title={'COVER LETTER'} />
        </View>
        <View style={{width: '100%', marginLeft: 32, marginBottom: 32}}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: '700',
              marginBottom: 8,
            }}>
            QUẢN LÝ CV
          </Text>
          <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
            DANH SÁCH CV ĐÃ TẠO
          </Text>
        </View>
        <View style={{marginLeft: 8}}>
          <Animated.FlatList
            data={[1, 2, 3, 4, 2, 4, 2]}
            keyExtractor={(item, i) => i.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              const inputRange = [
                (index - 1) * ITEM_SIZE,
                index * ITEM_SIZE,
                (index + 1) * ITEM_SIZE,
              ];

              const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.7, 1, 0.7],
              });
              return (
                <CardMyCV
                  index={index}
                  scale={scale}
                  handleDeleteCV={handleDeleteCV}
                  handleDetailCV={handleDetailCV}
                />
              );
            }}
            ItemSeparatorComponent={() => <View style={{width: 8}} />}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {contentOffset: {x: scrollX}},
                },
              ],
              {useNativeDriver: true},
            )}
            bounces={true}
            snapToInterval={ITEM_SIZE}
            pagingEnabled={true}
            snapToAlignment="start"
            renderToHardwareTextureAndroid
            decelerationRate={Platform.OS === 'ios' ? 0 : 0.88}
          />
        </View>

        <LinearGradient
          colors={['rgba(58,171,234,1)', 'rgba(72,77,233,1)']}
          style={styles.linearGradient}
        />
      </View>
      <Modal isVisible={isShowModalDelete}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              position: 'relative',
              width: width * 0.9,
              height: height * 0.4,
            }}>
            <Image
              source={BgModal}
              style={{
                position: 'absolute',
                resizeMode: 'stretch',
                height: '100%',
                width: '100%',
              }}
            />
            <View
              style={{
                padding: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={CVImage}
                style={{
                  height: 200,
                  width: 150,
                  borderRadius: 20,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{textAlign: 'center', color: 'white'}}>
                Bạn có chắc chắn muốn xóa CV Graphic Design không ?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-around',
                }}>
                <Button
                  title="Hủy"
                  height={32}
                  width={80}
                  fontSize={15}
                  onPress={() => setIsShowModalDelete(false)}
                />
                <Button
                  title="Xóa"
                  isActive={true}
                  height={32}
                  width={80}
                  fontSize={15}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.85)',
    flex: 1,
  },
  linearGradient: {
    height: height * 0.87,
    width: width * 0.35,
    position: 'absolute',
    right: 0,
    top: 0,
    borderBottomLeftRadius: 30,
    zIndex: -1,
  },
  btn: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
