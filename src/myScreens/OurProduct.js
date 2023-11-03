import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Button } from '@rneui/themed';

function 0urProduct({ navigation }) {

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

            </View>
    )

};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: '#2F26D9',
        borderRadius: 40

    },
    
 




});

export default OurProduct;