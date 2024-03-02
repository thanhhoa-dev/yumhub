import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

// import { useNavigation } from '@react-navigation/native';

const Register = () => {

    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.containerHeader}>
                <View style={styles.headerTitle}>
                    <Image style={{ height: 25, width: 25, marginTop: 20, marginStart: 8 }} source={require('../../image/arrow.png')} />
                    <Text style={styles.textHeader}>Hoàn thành đăng ký</Text>
                </View>
            </View>

            <View style={styles.containerBody}>
                <View style={styles.viewTextName}>
                    <Text style={styles.textName}> HỌ VÀ TÊN</Text>
                    <TextInput
                        placeholder="VD: LÊ VĂN A"
                        style={styles.textInputName}
                    />
                </View>
                <View style={styles.viewTextName}>
                    <Text style={styles.textName}> EMAIL</Text>
                    <TextInput
                        placeholder="VD: levan@gmail.com"
                        style={styles.textInputName}
                    />
                </View>
                <View style={styles.viewTextName}>
                    <Text style={styles.textName}> MÃ GIỚI THIỆU</Text>
                    <TextInput
                        placeholder="VD: TQ502"
                        style={styles.textInputName}
                    />
                </View>

                <View style={styles.viewTitle}>
                    <Text style={styles.textTitle}>Bằng việc tiếp tục. Bạn đồng ý với quy tắc chế sàn TMDT.
                        Hợp đồng vận chuyển của Be và Be được xử lí dữ liệu cá nhân của mình.
                    </Text>
                </View>
            </View>

            <View>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}> Xong</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


    )
};

export default Register;

const styles = StyleSheet.create({
    button:{
        marginStart:10,
    marginTop: 10,
    width: "95%",
    height: 40,
    borderRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'yellow',
    justifyContent:  'center',
    },
    viewButton: {
        marginTop: 330,
        
    },
    textTitle: {
        fontSize: 15,
        fontWeight: '500',
        marginStart: 10,
    },
    viewTitle: {
        marginTop: 40,
    },
    containerBody: {
        marginTop: 30,
    },
    textName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginStart: 10,
        marginTop: 5,
        color: 'black'
    },
    textInputName: {
        fontSize: 15,
        fontWeight: '250',
        marginStart: 10,
        color: 'black',
        marginTop: -5,
    },
    viewTextName: {
        width: '95%',
        borderWidth: 1,
        height: 60,
        marginTop: 40,
        fontWeight: '500',
        color: '#000000',
        borderColor: 'grey',
        textAlign: 'center',
        borderRadius: 5,
        borderWidth: 1,
        marginStart: 10,
    },
    backgroundContainer: {
        backgroundColor: "#fff",
        flex: 1,
    },
    containerHeader: {

    },
    textHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginStart: 20,
        marginTop: 20,
        color: 'black'
    },
    headerTitle: {
        flexDirection: "row"
    },

});
