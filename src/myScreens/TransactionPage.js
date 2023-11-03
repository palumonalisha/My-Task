import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Button } from '@rneui/themed';

function TransactionPage({ navigation }) {

    return (
        <View style={Styles.container}>

            <View>
                <Icon
                    name="angle-left"
                    size={19}
                    color='#ffff'
                    style={{ margin: 20, marginLeft: 29, }}
                />

                <Icon
                    name="bell-o"
                    size={20}
                    color='#9B9EA4'
                    style={{ position: 'absolute', right: 28, bottom: 15, borderColor: '#ffff' }}
                />
                <Icon
                    name="circle"
                    size={12}
                    color='red'
                    style={{ position: 'absolute', right: 27, bottom: 25, }}
                />
            </View>

            <Text style={{ position: 'absolute', color: '#BEBAFB', marginTop: 98, marginLeft: 30, fontSize: 15 }}> Your balance</Text>
            <Text style={{ position: 'absolute', color: '#ffff', marginTop: 119, marginLeft: 30, fontWeight: 'bold', fontSize: 19 }}> $547,000.00</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 10, marginTop: 65 }}>

                <View style={Styles.box}>
                    <Icon
                        name="dollar"
                        size={36}
                        color='#3970ED'
                        style={{ position: 'absolute', left: 15, bottom: 90, marginHorizontal: 8, }}
                    />
                    <Text style={{ marginLeft: 15, marginTop: 55, color: '#001830', fontSize: 19, fontWeight: 'bold' }}  >$5,000</Text>
                    <Text style={{ marginLeft: 15, marginBottom: 15, color: '#001830', fontSize: 15, }}  >Expense</Text>
                </View>
                <View style={Styles.box2}>

                    <Icon
                        name="dollar"
                        size={36}
                        color='#3970ED'
                        style={{ position: 'absolute', left: 15, bottom: 90, marginHorizontal: 8, }}
                    />

                    <Text style={{ marginLeft: 15, marginTop: 55, color: '#001830', fontSize: 19, fontWeight: 'bold' }}  >$5,000</Text>
                    <Text style={{ marginLeft: 15, marginBottom: 15, color: '#001830', fontSize: 15, }}  >Expense</Text>


                </View>
            </View>

            <View style={Styles.container2} >
                <View>
                    <Button buttonStyle={Styles.button1} title="See All" type="fill" titleStyle={Styles.buttonText2} />
                    <Text style={{ marginLeft: 28, position: 'absolute', bottom: 10, color: '#001830', fontSize: 19, fontWeight: 'bold' }}  >Transections</Text>

                    <Icon
                        name="circle"
                        size={46}
                        color='#3DDFFD'
                        style={{ position: 'absolute', left: 22, top: 96, marginHorizontal: 8, }}
                    />
                    <Icon
                        name="car"
                        size={16}
                        color='#000000'
                        style={{ position: 'absolute', left: 22, top: 110, marginHorizontal: 20, }}
                    />
                    <Text style={{ marginLeft: 64, position: 'absolute', left: 22, top: 105, color: '#001830', fontSize: 12, fontWeight: 'bold' }}  >Car Purchase</Text>
                    <Text style={{ marginLeft: 64, position: 'absolute', left: 22, top: 122, color: '#545454', fontSize: 10, }}  >AutoLoan</Text>
                    <Text style={{ marginLeft: 64, position: 'absolute', left: 270, top: 110, color: '#545454', fontSize: 15, fontWeight: 'bold' }}  >-$250</Text>


                    <View>
                        <Icon
                            name="circle"
                            size={46}
                            color='#3DDFFD'
                            style={{ position: 'absolute', left: 22, top: 96, marginHorizontal: 8, }}
                        />
                        <Icon
                            name="home"
                            size={16}
                            color='#000000'
                            style={{ position: 'absolute', left: 22, top: 110, marginHorizontal: 20, }}
                        />
                        <Text style={{ marginLeft: 64, position: 'absolute', left: 22, top: 105, color: '#001830', fontSize: 12, fontWeight: 'bold' }}  >housePurchase</Text>
                        <Text style={{ marginLeft: 64, position: 'absolute', left: 22, top: 122, color: '#545454', fontSize: 10, }}  >AutoLoan</Text>
                        <Text style={{ marginLeft: 64, position: 'absolute', left: 270, top: 110, color: '#545454', fontSize: 15, fontWeight: 'bold' }}  >-$250</Text>
                    </View>

                    <View>
                        <Icon
                            name="circle"
                            size={46}
                            color='#3DDFFD'
                            style={{ position: 'absolute', left: 22, top: 166, marginHorizontal: 8, }}
                        />
                        <Icon
                            name="bank"
                            size={16}
                            color='#000000'
                            style={{ position: 'absolute', left: 22, top: 178, marginHorizontal: 20, }}
                        />
                        <Text style={{ marginLeft: 64, position: 'absolute', left: 22, top: 175, color: '#001830', fontSize: 12, fontWeight: 'bold' }}  >Transport</Text>
                        <Text style={{ marginLeft: 64, position: 'absolute', left: 22, top: 190, color: '#545454', fontSize: 10, }}  >AutoLoan</Text>
                        <Text style={{ marginLeft: 64, position: 'absolute', left: 270, top: 175, color: '#545454', fontSize: 15, fontWeight: 'bold' }}  >-$250</Text>
                    </View>

                    <View>
                        <Icon
                            name="circle"
                            size={46}
                            color='#3DDFFD'
                            style={{ position: 'absolute', left: 22, top: 234, marginHorizontal: 8, }}
                        />
                        <Icon
                            name="bank"
                            size={16}
                            color='#000000'
                            style={{ position: 'absolute', left: 22, top: 248, marginHorizontal: 20, }}
                        />
                        <Text style={{ marginLeft: 64, position: 'absolute', left: 22, top: 240, color: '#001830', fontSize: 12, fontWeight: 'bold' }}  >Shopping</Text>
                        <Text style={{ marginLeft: 64, position: 'absolute', left: 22, top: 255, color: '#545454', fontSize: 10, }}  >AutoLoan</Text>
                        <Text style={{ marginLeft: 64, position: 'absolute', left: 270, top: 250, color: '#545454', fontSize: 15, fontWeight: 'bold' }}  >-$250</Text>

                    </View>




                </View>

            </View>





        </View>
    )

};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:40,
        backgroundColor: '#2F26D9',
        borderRadius: 40

    },
    container2: {


        backgroundColor: '#ffff',
        borderRadius: 40,
        width: 393,
        height: 399,
        marginRight: 19,
        marginTop: 34,


    },

    box: {
        width: 138,
        height: 146,
        backgroundColor: '#C4F2FF',
        borderColor: "#D8D6D6",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'left',
        borderRadius: 8,
        paddingHorizontal: 2,
        marginLeft: 27,
        marginTop: 50

    },
    box2: {
        width: 138,
        height: 146,
        backgroundColor: '#FFE6D9',
        borderColor: "#D8D6D6",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'left',
        borderRadius: 8,
        paddingHorizontal: 2,
        marginLeft: 27,
        marginTop: 50

    },

    button1: {
        backgroundColor: '#F1F1FD',
        width: 110,
        height: 40,
        // marginBottom:76,
        // marginLeft:170,
        borderRadius: 10,
        margin: 8,
        marginTop: 25,
        marginLeft: 260,

    },

    buttonText1: {
        color: '#0079D0',
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 2,
        borderRadius:10
        

    },

   





});

export default TransactionPage;