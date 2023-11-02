import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Button } from '@rneui/themed';

function CreditcardPage({ navigation }) {

    return (
        <View style={Styles.container}>
            <View>
                <Icon
                    name="arrow-left"
                    size={19}
                    color='#58585A'
                    style={{ margin: 16, }}
                />
                <Icon
                    name="pencil"
                    size={19}
                    color='#58585A'
                    style={{ margin: 16, position: 'absolute', right: 10, top: 8, }}

                />
            </View>

            <View style={Styles.box1}>
                <Icon
                    name="hourglass-start"
                    size={49}
                    color='#FCC199'
                    style={{ margin: 25, position: 'absolute', right: 10, top: 8, }}
                />
            </View>

            <Text style={{ margin: 15, fontSize: 26, marginLeft: 106, fontWeight: 'bold', color: '#545454' }} > Antihistamin </Text>
            <Text style={{ marginTop: 0, fontSize: 16, marginLeft: 75, color: '#AEB0B1' }} >  obta unty mengobati reasdialergi</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 10, marginTop: 25 }}>
                <View style={Styles.headerbox}>


                    <Icon
                        name="bank"
                        size={16}
                        color='#EBBF81'
                        style={{ position: 'absolute', left: 0, bottom: 21, marginHorizontal: 20, }}
                    />
                    <Text style={{ marginLeft: 15, marginBottom: 40, color: '#AEB0B1', fontSize: 16, fontWeight: 'bold' }}  >Durasi</Text>
                    <Text style={{ marginLeft: 50, position: 'absolute', bottom: 20, fontSize: 16, fontWeight: 'bold', color: '#545454' }}  >1Bulan</Text>
                </View>

                <View style={Styles.headerbox}>
                    <Icon
                        name="bank"
                        size={16}
                        color='#EBBF81'
                        style={{ position: 'absolute', left: 0, bottom: 21, marginHorizontal: 20, }}
                    />
                    <Text style={{ marginLeft: 15, marginBottom: 40, color: '#AEB0B1', fontSize: 16, fontWeight: 'bold' }}  >Frekuensi</Text>
                    <Text style={{ marginLeft: 50, position: 'absolute', bottom: 20, fontSize: 16, fontWeight: 'bold', color: '#545454' }}  >2*Sehari</Text>

                </View>
            </View>

            <Text style={{ marginLeft: 32, marginTop: 13, fontSize: 18, fontWeight: 'bold', color: '#545454' }}  >Ceklis Selanjutnya</Text>

            <View style={Styles.fooderbox}>
                <Text style={{ marginTop: 15, fontSize: 18, marginLeft: 18, fontWeight: 'bold', color: '#545454' }} > Hari ini Pukul 10:00 </Text>
                <Text style={{ marginTop: 5, fontSize: 15, marginLeft: 15, color: '#AEB0B1' }} >  1 Kassul Antihistamin</Text>
                <Icon
                    name="angle-up"
                    size={30}
                    color='#D8DFE0'
                    style={{ margin: 15, position: 'absolute', right: 2, top: 5, }}
                />

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 5, marginTop: 5 }}>
                    <Button buttonStyle={Styles.button1} title="Ingatgan Nanti" type="fill" titleStyle={Styles.buttonText1} />
                    <Button buttonStyle={Styles.button2} title="Sales" type="fill" titleStyle={Styles.buttonText2} />

                </View>
                <View style={{ width: 4, height: 54, backgroundColor: '#F3AB5A', position: 'absolute', left: 9, bottom: 84, borderRadius: 5, }}></View>
            </View>



            <View style={Styles.fooderbox2}>
                <Text style={{ marginTop: 19, fontSize: 18, marginLeft: 18, fontWeight: 'bold', color: '#545454' }} > Hari ini Pukul 10:00 </Text>
                <Text style={{ marginTop: 5, fontSize: 15, marginLeft: 15, color: '#AEB0B1' }} >  1 Kassul Antihistamin</Text>
                <Icon
                    name="angle-down"
                    size={30}
                    color='#D8DFE0'
                    style={{ margin: 15, position: 'absolute', right: 2, top: 5, }}
                />
                <View style={{ width: 4, height: 54, backgroundColor: '#F3AB5A', position: 'absolute', left: 9, bottom: 23, borderRadius: 5, }}></View>
            </View>







        </View>
    )

};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FAF6F1',
        borderRadius: 40,
        paddingTop: 58,

    },

    box1: {
        backgroundColor: '#FAFAFA',
        color: '#F9FAFA',
        width: 113,
        height: 111,
        borderRadius: 28,
        marginLeft: 130,



    },

    headerbox: {
        width: 158,
        height: 79,
        backgroundColor: '#ffff',
        borderColor: "#D8D6D6",
        justifyContent: 'center',
        alignItems: 'left',
        borderRadius: 20,
        paddingHorizontal: 2,
        marginLeft: 15,


    },
    fooderbox: {
        backgroundColor: '#ffff',
        width: 324,
        height: 155,
        marginTop: 22,
        marginLeft: 30,
        borderRadius: 20,


    },
    fooderbox2: {
        backgroundColor: '#ffff',
        width: 324,
        height: 100,
        marginTop: 30,
        marginLeft: 30,
        borderRadius: 20,
    },
    button1: {
        backgroundColor: '#EAEFF0',
        width: 130,
        height: 40,
        marginTop: 22,
        marginLeft: 20,
        borderRadius: 10,
        marginLeft: 14,


    },
    button2: {
        backgroundColor: '#20304F',
        width: 130,
        height: 40,
        // marginBottom:76,
        // marginLeft:170,
        borderRadius: 10,
        margin: 8,
        marginTop: 22,
        marginBottom: 18,
        marginLeft: 18,


    },
    // personalButton: {
    //     width: 113,
    //     height: 30,
    //     alignItems: 'center',
    //     backgroundColor: '#0079D0',
    //     paddingVertical: 3,
    //     borderRadius: 2,
    //     borderColor: '#0079D0',
    //     borderWidth:1,
    //     marginLeft: 14,
    //     marginTop: 11,
    // },

    buttonText1: {
        color: '#0079D0',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 2,

    },
    buttonText2: {
        color: '#ffff',
        fontSize: 14,
        marginTop: 2,

    },


});

export default CreditcardPage;