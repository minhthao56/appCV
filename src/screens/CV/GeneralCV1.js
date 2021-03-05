/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {useIsFocused} from '@react-navigation/core';

import ImageAvatar from '../../assets/images/avatar2.png';
import {NeumorphismBtn, NeumorphismHeader} from '../../components';
import {
  SvgCake,
  SvgEmail,
  SvgGender,
  SvgHeart,
  SvgHome,
  SvgPhone,
  SvgStudy,
} from '../../assets/svg';
import ImageLight from '../../assets/icons/kiến-thức.png';

const {width} = Dimensions.get('screen');
const MainColor = '#3D5578';

export const GeneralCV1 = ({navigation}) => {
  const isFocused = useIsFocused();
  return (
    <>
      {isFocused ? (
        <StatusBar backgroundColor={'#E0E0E0'} barStyle="dark-content" />
      ) : null}
      <View
        style={{
          backgroundColor: '#E0E0E0',
          flex: 1,
        }}>
        <View style={{paddingHorizontal: 12, paddingTop: 6, paddingBottom: 4}}>
          <NeumorphismHeader navigation={navigation} />
        </View>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            paddingHorizontal: 12,
            paddingBottom: 12,
            paddingTop: 12,
          }}>
          <Neomorph
            darkShadowColor="#888" // <- set this
            lightShadowColor="white" // <- this
            style={{
              shadowOpacity: 0.4, // <- and this or yours opacity
              shadowRadius: 6,
              borderRadius: 100,
              backgroundColor: '#DDD',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 24,
            }}>
            <Image source={ImageAvatar} style={{width: '85%', height: '85%'}} />
          </Neomorph>
          <Text
            style={{
              color: MainColor,
              fontSize: 26,
              fontWeight: '700',
              marginBottom: 24,
            }}>
            NGUYỄN THỊ KIỀU TRANG
          </Text>
          <Neomorph
            darkShadowColor="#888" // <- set this
            lightShadowColor="white" // <- this
            style={{
              shadowOpacity: 0.5, // <- and this or yours opacity
              shadowRadius: 6,
              backgroundColor: '#e1e1e1',
              width: width * 0.9,
              height: 136,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
              borderRadius: 20,
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                padding: 12,
                justifyContent: 'space-between',
                paddingVertical: 20,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 16,
                    }}>
                    <SvgCake fill={MainColor} height={18} width={18} />
                    <Text style={{color: MainColor, marginLeft: 6}}>
                      21 - 02 - 1996
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <SvgGender fill={MainColor} height={18} width={18} />
                    <Text style={{color: MainColor, marginLeft: 6}}>Nữ</Text>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 16,
                    }}>
                    <SvgPhone fill={MainColor} height={18} width={18} />
                    <Text style={{color: MainColor, marginLeft: 6}}>
                      076.123.2345
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <SvgEmail fill={MainColor} height={18} width={18} />
                    <Text style={{color: MainColor, marginLeft: 6}}>
                      nguyenthihong@gmail.com
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <SvgHome fill={MainColor} height={20} width={20} />
                <Text style={{color: MainColor, marginLeft: 6}}>
                  396 Cach Mang Thang 8, phuong 8, quan 3, TP.HCM
                </Text>
              </View>
            </View>
          </Neomorph>
          <View style={{width: '100%', marginBottom: 14}}>
            <NeumorphismBtn MainColor={MainColor}>
              <SvgStudy />
              <Text
                style={{
                  color: MainColor,
                  fontWeight: '700',
                  fontSize: 17,
                  paddingHorizontal: 8,
                }}>
                HỌC VẤN
              </Text>
            </NeumorphismBtn>
            <Text style={{color: MainColor, paddingLeft: 16, lineHeight: 21}}>
              <Text style={{color: MainColor, fontWeight: '700'}}>
                08/2018 – 01/2020
                {'\n'}
              </Text>
              {'\n'}Tốt nghiệp cử nhân chuyên ngành Marketing {'\n'}Trường Đại
              học Kinh tế TP.HCM {'\n'}Khoa: Quản trị kinh doanh {'\n'}Điểm
              trung bình: 7.0
            </Text>
          </View>
          <View style={{width: '100%'}}>
            <NeumorphismBtn MainColor={MainColor}>
              <Image source={ImageLight} style={{height: 32, width: 32}} />
              <Text
                style={{
                  color: MainColor,
                  fontWeight: '700',
                  fontSize: 17,
                  paddingHorizontal: 8,
                }}>
                KIẾN THỨC
              </Text>
            </NeumorphismBtn>
            <Text style={{color: MainColor, paddingLeft: 16, marginBottom: 12}}>
              <Text style={{color: MainColor, fontWeight: '700'}}>
                Các kiến thức tôi đã tích luỹ được trong quá trình học tại
                trường:{'\n'}
                {'\n'}
              </Text>
              <Text style={{lineHeight: 21}}>
                Tôi là một người không quá quan trọng về bằng cấp, cho nên điều
                làm tôi cảm thấy hứng thú nhất khi học tại trường là các kiến
                thức về Marketing mà tôi học được và các kiến thức này sẽ giúp
                gì cho mình sau này khi ra trường, các kiến thức về Marketing mà
                tôi thích nhất {'\n'}
                {'\n'}
                Tôi là một người không quá quan trọng về bằng cấp, cho nên điều
                làm tôi cảm thấy hứng thú nhất khi học tại trường là các kiến
                thức về Marketing mà tôi học được và các kiến thức này sẽ giúp
                gì cho mình sau này khi ra trường, các kiến thức về Marketing mà
                tôi thích nhất có thể được kể đến như: kiến thức cốt lõi về
                Marketing căn bản, cách tối ưu SEO, kiến thức về tăng độ nhận
                biết của thương hiệu đối với khách hàng, các kiến thức về lập kế
                hoạch Marketing và truyền thông đa kênh. Theo tôi, đây là những
                kiến thức rất quan trọng cần phải nắm vững khi làm những công
                việc liên quan đến mảng Marketing
              </Text>
            </Text>
          </View>
          <View style={{width: '100%', marginBottom: 16}}>
            <Neomorph
              inner // <- enable shadow inside of neomorph
              darkShadowColor="#555" // <- set this
              lightShadowColor="white" // <- this
              style={{
                shadowRadius: 10,
                borderRadius: 20,
                backgroundColor: '#DDDDDD',
                width: 245,
                height: 52,
                justifyContent: 'center',
                alignItems: 'center',
                shadowOpacity: 0.5,
              }}>
              <View
                style={{
                  borderWidth: 1.5,
                  borderColor: MainColor,
                  height: '80%',
                  width: '90%',
                  borderRadius: 14,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: '700', color: MainColor}}>
                  LIÊN KẾT THAM KHẢO
                </Text>
              </View>
            </Neomorph>
          </View>
          <View style={{width: '100%'}}>
            <NeumorphismBtn MainColor={MainColor}>
              <SvgHeart />
              <Text
                style={{
                  color: MainColor,
                  fontWeight: '700',
                  fontSize: 17,
                  paddingHorizontal: 8,
                }}>
                PHẨM CHẤT
              </Text>
            </NeumorphismBtn>
            <Text style={{color: MainColor, lineHeight: 21, marginBottom: 8}}>
              Trong công việc, tôi là 1 người rất trung thực và thẳng thắn, vì
              tính trung thực của mình, khi nói về 1 người hoặc 1 chuyện nào đó,
              tôi sẽ đưa ra nhận xét 1 cách khách quan nhất
            </Text>
            <View
              style={{
                width: 100,
                height: 22,
                borderWidth: 1,
                borderColor: MainColor,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 6,
              }}>
              <Text style={{color: MainColor}}>Trung Thực</Text>
            </View>
            <Text style={{color: MainColor, lineHeight: 21, marginBottom: 16}}>
              Trong công việc, tôi là 1 người rất trung thực và thẳng thắn, vì
              tính trung thực của mình, khi nói về 1 người hoặc 1 chuyện nào đó,
              tôi sẽ đưa ra nhận xét 1 cách khách quan nhất
            </Text>
            <View
              style={{
                width: 100,
                height: 22,
                borderWidth: 1,
                borderColor: MainColor,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 6,
              }}>
              <Text style={{color: MainColor}}>Can Đảm </Text>
            </View>
            <Text style={{color: MainColor, lineHeight: 21, marginBottom: 16}}>
              Tôi là 1 người sẵn sàng chấp nhận rủi ro, tôi sẵn sàng chấp nhận
              đương đầu thử thách, sẵn sàng đảm nhận công việc có vai trò quan
              trọng hay công việc hoàn toàn mới toanh có độ không chắc chắn và
              khả năng thất bại rất cao. Và tôi cũng là người sẵn sàng nói ra
              chính kiến của bản thân trong mọi hoàn cảnh
            </Text>
            <View
              style={{
                width: 100,
                height: 22,
                borderWidth: 1,
                borderColor: MainColor,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 6,
              }}>
              <Text style={{color: MainColor}}>Dễ gần</Text>
            </View>
            <Text style={{color: MainColor, lineHeight: 21, marginBottom: 24}}>
              Trong công việc, tôi là 1 người rất trung thực và thẳng thắn, vì
              tính trung thực của mình, khi nói về 1 người hoặc 1 chuyện nào đó,
              tôi sẽ đưa ra nhận xét 1 cách khách quan nhất
            </Text>
          </View>
          <Neomorph
            darkShadowColor="#888" // <- set this
            lightShadowColor="white" // <- this
            style={{
              shadowOpacity: 0.4, // <- and this or yours opacity
              shadowRadius: 6,
              borderRadius: 20,
              backgroundColor: '#DDD',
              width: width * 0.9,
              height: width * 0.9,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '92%',
                height: '92%',
                borderWidth: 1.5,
                borderRadius: 20,
                borderColor: 'white',
              }}></View>
          </Neomorph>
        </ScrollView>
      </View>
    </>
  );
};
