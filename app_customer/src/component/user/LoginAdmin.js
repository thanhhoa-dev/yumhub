import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

// import { useNavigation } from '@react-navigation/native';

const LoginAdmin = () => {

  return (
    <View>
      <View>
        <Text style={styles.textHeader}>Lên xe cùng be!</Text>
      </View>

      <View>
        <Text style={styles.textHeader2}>Đăng nhập / Đăng ký tài khoản be ngay bây giờ</Text>
      </View>

      <View style={styles.viewContainerTextPhone}>
        <View style={styles.viewTextPhone1}>
          <TextInput
            placeholder="+84"
            style={styles.textInputPhone1}
          />
        </View>
        <View style={styles.viewTextPhone2}>
          <TextInput
            placeholder="Số điện thoại của bạn"
            style={styles.textInputPhone2}
          />
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonContinue}>
          <Text style={{ color: 'white', fontSize: 16}}> Tiếp tục</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewOr}>
        <View style={{
          marginStart: 20,
          marginTop: 20,
          width: 150,
          height: 1,
          borderRadius: 8,
          borderWidth: 1,
          color: 'grey'
        }} />
        <View >
          <Text style={styles.textOr}>Hoặc</Text>
        </View>
        <View style={{
          marginStart: 10,
          marginTop: 20,
          width: 150,
          height: 1,
          borderRadius: 8,
          borderWidth: 1,
          color: 'grey'
        }} />
      </View>

      <View >
        <TouchableOpacity style={styles.buttonLoginFB}>
          <Image style={{ height: 25, width: 25 }} source={require("../../image/facebook.png")}></Image>
          <Text style={{ color: 'white', fontSize: 16}}> Đăng nhập bằng Facebook</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.buttonLoginGG}>
          <Image style={{ height: 25, width: 25 }} source={require("../../image/google.png")}></Image>
          <Text style={{ color: 'white', fontSize: 16}}> Đăng nhập bằng Google</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.textFooter}> Tôi đồng ý với điều kiện & Điều khoản và Hợp đồng vận chuyển của be</Text>
      </View>
    </View>



  )
};

export default LoginAdmin;

const styles = StyleSheet.create({
  textFooter:{
    fontSize: 15,
    fontWeight: '400',
    marginTop: 20,
    marginStart: 10,
  },
  buttonLoginFB: {
    marginStart: 20,
    marginTop: 30,
    width: "90%",
    borderRadius: 8,
    borderWidth: 1,
  },
  buttonLoginFB: {
    marginStart: 20,
    marginTop: 30,
    width: "90%",
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    justifyContent:  'center',
  },
  buttonLoginGG: {
    marginStart: 20,
    marginTop: 10,
    width: "90%",
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    justifyContent:  'center',
  },
  textOr: {
    fontSize: 18,
    fontWeight: '400',
    marginStart: 14,
    marginTop: 7,
    marginStart: 10,
  },
  viewOr: {
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonContinue: {
    marginStart: 20,
    marginTop: 30,
    width: "90%",
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    justifyContent:  'center',
  },
  viewContainerTextPhone: {
    flexDirection: 'row',
    marginTop: 30,
  },
  textInputPhone2: {
    color: 'black',
    fontSize: 15,
    fontWeight: '300',
    marginStart: 10,

  },
  textInputPhone1: {
    color: 'black',
    fontSize: 15,
    fontWeight: '700',
    marginStart: 2,
    alignSelf: 'center',
  },
  viewTextPhone1: {
    width: '20%',
    borderWidth: 1,
    height: 50,
    marginTop: 13,
    marginStart: 20,
    fontWeight: '500',
    color: '#000000',
    borderColor: 'black',
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 2,
  },
  viewTextPhone2: {
    width: '70%',
    borderWidth: 1,
    height: 50,
    marginTop: 13,
    fontWeight: '500',
    color: '#000000',
    borderColor: 'black',
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 2,
  },

  textHeader2: {
    color: 'black',
    fontSize: 17,
    fontWeight: '500',
    marginStart: 10,
    marginTop: 5,
  },

  textHeader: {
    color: 'black',
    fontSize: 27,
    fontWeight: '800',
    marginTop: 80,
    marginStart: 10,
  },
});
