import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Button } from '@rneui/themed';

function OurProduct({ navigation }) {

    return (
        <View style={Styles.container}>

            <View>
                <Icon
                    name="bars"
                    size={19}
                    color='#000000'
                    style={{ paddingTop: 38, marginLeft: 16, }}
                />

                <Icon
                    name="gg-circle"
                    size={29}
                    color='red'
                    style={{ position: 'absolute', left: 165, top: 33 }}
                />

                <Icon
                    name="search"
                    size={20}
                    color='#000000'
                    style={{ paddingTop: 38, position: 'absolute', right: 16, borderColor: '#ffff' }}
                />

            </View>

            <Text style={{ color: '#00000', fontSize: 22, fontWeight: 'bold', marginTop: 26, marginLeft: 10, }}> Our Product</Text>
            <Text style={{ color: '#00000', fontSize: 15, position: 'absolute', right: 50, top: 128 }}> Sort by</Text>
            <Icon
                name="angle-down"
                size={19}
                color='#000000'
                style={{ position: 'absolute', right: 26, top: 130 }}
            />

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 }}>
                <Button buttonStyle={Styles.button1} title="Sneakers" type="fill" titleStyle={Styles.buttonText1} />
                <Button buttonStyle={Styles.button1} title="Watch" type="fill" titleStyle={Styles.buttonText1} />
                <Button buttonStyle={Styles.button1} title="Backpack" type="fill" titleStyle={Styles.buttonText1}
                />

                <Icon
                    name="apple"
                    size={19}
                    color='#AD3B18'
                    style={{ position: 'absolute', right: 335, top: 35 }}
                />
                <Icon
                    name="apple"
                    size={19}
                    color='#000000'
                    style={{ position: 'absolute', right: 213, top: 35 }}
                // style={{ position: 'absolute', right:335,top:35 }}
                />
                <Icon
                    name="apple"
                    size={19}
                    color='#000000'
                    style={{ position: 'absolute', right: 95, top: 35, }}

                />
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 18, marginTop: 25 }}>

                <View style={Styles.box} onPress={() => navigation.navigate('TransactionPage')}>
                    <TouchableOpacity style={{ backgroundColor: '#ffff', width: 38, height: 25, bottom: 43, borderRadius: 8 }}>
                        <Text style={{ fontSize: 12, left: 6, top: 4, fontWeight: 'bold' }}> 39%</Text>
                    </TouchableOpacity>
                    <Icon
                        name="apple"
                        size={66}
                        color='#ffff'
                        style={{ position: 'absolute', left: 18, bottom: 32, marginHorizontal: 19, }}
                    />

                    <Icon
                        name="heart"
                        size={12}
                        color='#ffff'
                        style={{ position: 'absolute', left: 90, bottom: 115, marginHorizontal: 15, }}
                    />

                    <TouchableOpacity onPress={() => navigation.navigate('TransactionPage')}>
                        <Text style={{ position: 'absolute', right: 15, top: 80, color: '#000000', fontSize: 14, }} >Transection </Text>
                        <Text style={{ color: '#000000', fontSize: 13, fontWeight: 'bold', left: 30, top: 103, }} >$ 700.00 </Text>
                        <Text style={{ color: '#EAD30C', fontSize: 10, fontWeight: 'bold', position: 'absolute', left: 28, top: 129, }} >* * * * * * * <Text style={{ color: '#000000', marginTop: 2 }}> 4.5</Text> </Text>
                    </TouchableOpacity>

                </View>

                <View style={Styles.box} onPress={() => navigation.navigate('TransactionPage')}>

                    <TouchableOpacity style={{ backgroundColor: '#ffff', width: 38, height: 25, bottom: 43, borderRadius: 8 }}>
                        <Text style={{ fontSize: 12, left: 6, top: 2, fontWeight: 'bold' }}> 39%</Text>
                    </TouchableOpacity>
                    <Icon
                        name="apple"
                        size={66}
                        color='red'
                        style={{ position: 'absolute', left: 18, bottom: 32, marginHorizontal: 19, }}
                    />

                    <Icon
                        name="heart"
                        size={12}
                        color='#ffff'
                        style={{ position: 'absolute', left: 90, bottom: 115, marginHorizontal: 15, }}
                    />

                    <TouchableOpacity >
                        <Text style={{ position: 'absolute', right: 15, top: 80, color: '#000000', fontSize: 14, }} >Transection </Text>
                        <Text style={{ color: '#00000', fontSize: 13, fontWeight: 'bold', left: 30, top: 103, }} >$ 700.00 </Text>
                        <Text style={{ color: '#EAD30C', fontSize: 10, fontWeight: 'bold', position: 'absolute', left: 28, top: 129, }} >* * * * * * * <Text style={{ color: '#000000', marginTop: 2 }}> 4.5</Text> </Text>
                    </TouchableOpacity>

                </View>


                <View style={Styles.box3} onPress={() => navigation.navigate('TransactionPage')}>

                    <TouchableOpacity style={{ backgroundColor: '#ffff', width: 38, height: 25, bottom: 43, borderRadius: 8 }}>
                        <Text style={{ fontSize: 12, left: 6, top: 2, fontWeight: 'bold' }}> 38%</Text>
                    </TouchableOpacity>
                    <Icon
                        name="apple"
                        size={66}
                        color='#E8EBFF'
                        style={{ position: 'absolute', left: 18, bottom: 32, marginHorizontal: 19, }}
                    />

                    <Icon
                        name="heart"
                        size={12}
                        color='#ffff'
                        style={{ position: 'absolute', left: 90, bottom: 115, marginHorizontal: 15, }}
                    />

                    <TouchableOpacity >
                        <Text style={{ position: 'absolute', right: 15, top: 80, color: '#000000', fontSize: 14, }} >Transection </Text>
                        <Text style={{ color: '#00000', fontSize: 13, fontWeight: 'bold', left: 30, top: 103, }} >$ 700.00 </Text>
                     
                    </TouchableOpacity>

                </View>


                <View style={Styles.box3} >

                    <TouchableOpacity style={{ backgroundColor: '#ffff', width: 38, height: 25, bottom: 43, borderRadius: 8 }}>
                        <Text style={{ fontSize: 12, left: 6, top: 2, fontWeight: 'bold' }}> 39%</Text>
                    </TouchableOpacity>
                    <Icon
                        name="apple"
                        size={66}
                        color='#E8EBFF'
                        style={{ position: 'absolute', left: 18, bottom: 32, marginHorizontal: 19, }}
                    />

                    <Icon
                        name="heart"
                        size={12}
                        color='#ffff'
                        style={{ position: 'absolute', left: 90, bottom: 115, marginHorizontal: 15, }}
                    />

                    <TouchableOpacity >
                        <Text style={{ position: 'absolute', right: 15, top: 80, color: '#000000', fontSize: 14, }} >Transection </Text>
                        <Text style={{ color: '#00000', fontSize: 13, fontWeight: 'bold', left: 30, top: 103, }} >$ 700.00 </Text>
                       
                    </TouchableOpacity>

                </View>


            </View>
        </View>
    )

};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 38,
        backgroundColor: '#ffff',
        borderRadius: 40

    },

    button1: {
        backgroundColor: '#EAEFF0',
        width: 110,
        height: 45,
        marginTop: 22,

        borderRadius: 10,
        marginLeft: 10,


    },
    buttonText1: {
        color: '#0079D0',
        fontSize: 12,
        marginTop: 2,
        marginLeft: 15

    },

    box: {
        width: 130,
        height: 141,
        backgroundColor: '#90A5ED',
        justifyContent: 'center',
        alignItems: 'left',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginLeft: 27,
        marginTop: 10,

    },
    box1: {
        width: 130,
        height: 141,
        backgroundColor: '#FF5949',
        justifyContent: 'center',
        alignItems: 'left',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginLeft: 27,
        marginTop: 10,


    },
    box2: {
        width: 130,
        height: 141,
        backgroundColor: '#ECAC4A',
        justifyContent: 'center',
        alignItems: 'left',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginLeft: 27,
        marginTop: 10,


    },
    box3: {
        width: 130,
        height: 141,
        backgroundColor: '#2F25DD',
        justifyContent: 'center',
        alignItems: 'left',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginLeft: 27,
        marginTop: 90,

    },

    box3: {
        width: 130,
        height: 141,
        backgroundColor: '#2F25DD',
        justifyContent: 'center',
        alignItems: 'left',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginLeft: 27,
        marginTop: 90,


    },







});

export default OurProduct;