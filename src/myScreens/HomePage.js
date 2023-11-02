import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';


const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

function HomePage({ navigation }) {

  return (

    <View style={Styles.container}>


      <View style={Styles.header} >

        <Icon
          name="circle"
          size={46}
          color='#E8EBFF'
          style={{marginLeft:15  }}
        />
         <Icon
          name="minus"
          size={13}
          color='#495FAB'
          style={{ position: 'absolute', left: 28, bottom:20, }}
        />
        <Icon
          name="minus"
          size={18}
          color='#495FAB'
          style={{ position: 'absolute', left: 28,bottom: 11, }}
        /> 

        <Icon
          name="bell-o"
          size={20}
          color='#9B9EA4'
          style={{ position: 'absolute', right: 78, bottom: 15, }}
        />
        <Icon
          name="circle"
          size={12}
          color='red'
          style={{ position: 'absolute', right: 77, bottom: 25, }}

        />
        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={{ position: 'absolute', right: 22, bottom: 9, width: 33, height: 33, borderRadius: 30 }} />

      </View>

       <View style={{marginLeft:18 ,marginTop:20 }} >
        <Text style={{ color: '#95A4B0', fontSize: 19,}}> Welcome Back </Text>
        <Text style={{ color: '#001830', fontSize: 23, }}> Creative Mints </Text>
          <TextInput
            placeholder='Search  '
            clearButtonMode="always"
            style={Styles.searchBox} 
            
          />
       
        <Icons
          name="search"
          size={16}
          color='#000000'
          style={{marginLeft:20, position:'absolute',bottom:12
           
          }}
        />
        </View>       

      <View style={{ flexDirection: 'row', flexWrap: 'wrap',margin:18,marginTop:25  }}>

        <View style={Styles.box} onPress={() => navigation.navigate('TransactionPage')}>

        <Icon
          name="circle"
          size={46}
          color='#E8EBFF'
          style={{ position: 'absolute', left:0, bottom: 75, marginHorizontal: 15, }}
        />
         <Icon
          name="circle"
          size={29}
          color='#01CD88'
          style={{ position: 'absolute', right: 82, bottom: 84, }}

        />
        <Icon
          name="circle"
          size={76}
          color='#18D195'
          style={{ position: 'absolute', left:73, bottom: 71, marginHorizontal: 20,width:38 }}
        />
           <Icon
          name="circle"
          size={76}
          color='#48DAA9'
          style={{ position: 'absolute', left:73, bottom: 32, marginHorizontal: 20,width:38,borderColor:'#000000' }}
        />
        <Text  style={{ position: 'absolute', right: 86, bottom: 88,color:'#ffff',fontSize: 18,}} >$ </Text>

        <TouchableOpacity onPress={() => navigation.navigate('TransactionPage')}>
        <Text  style={{ position: 'absolute', right: 36, top:18,color:'#ffff',fontSize: 14,}} >Transection </Text>
        </TouchableOpacity>

        <Text  style={{ position: 'absolute', right: 76, bottom:16,color:'#ffff',fontSize: 10,}} >7 Items </Text>

        </View>
        <View style={Styles.box1}>
        <Icon
          name="circle"
          size={46}
          color='#E8EBFF'
          style={{ position: 'absolute', left:0, bottom: 75, marginHorizontal: 15, }}
        />
         <Icon
          name="list-alt"
          size={20}
          color='#FF5949'
          style={{ position: 'absolute', right: 85, bottom: 88, }}

        />
        
       
        <Text  style={{ position: 'absolute', right: 65, bottom:34,color:'#ffff',fontSize: 14,}} >Budget </Text>
        <Text  style={{ position: 'absolute', right: 76, bottom:16,color:'#ffff',fontSize: 10,}} >4 Items </Text>


        </View>
        <View style={Styles.box2}>
        <Icon
          name="circle"
          size={46}
          color='#E8EBFF'
          style={{ position: 'absolute', left:0, bottom: 75, marginHorizontal: 15, }}
        />
         <Icon
          name="star"
          size={20}
          color='#ECAC4A'
          style={{ position: 'absolute', right: 86, bottom: 89, }}

        />
        
        <Text  style={{ position: 'absolute', right: 16, bottom:34,color:'#ffff',fontSize: 13,}} >Recommendation </Text>
        <Text  style={{ position: 'absolute', right: 78, bottom:16,color:'#ffff',fontSize: 10,}} >7 Items </Text>


        </View>
        <View style={Styles.box3} onPress={() => navigation.navigate('CreditcardPage')}>
        <Icon
          name="circle"
          size={46}
          color='#E8EBFF'
          style={{ position: 'absolute', left:0, bottom: 75, marginHorizontal: 15, }}
        />
         <Icon
          name="suitcase"
          size={19}
          color='#2F25DD'
          style={{ position: 'absolute', right: 85, bottom: 89, }}

        />
          <TouchableOpacity onPress={() => navigation.navigate('CreditcardPage')}>
        <Text  style={{ position: 'absolute', right: 31, top:19,color:'#ffff',fontSize: 14,}} >Credit Cards </Text>
        </TouchableOpacity>
        <Text  style={{ position: 'absolute', right: 76, bottom:16,color:'#ffff',fontSize: 10,}} >3 Cards </Text>


        </View>

         <Text style={{ marginLeft: 30,marginTop: 30,color: '#001830',fontSize: 20, }}  >Choose a categories </Text> 

         <View style={{ flexDirection: 'row', flexWrap: 'wrap',margin:10,marginTop:35  }}>

        <View style={Styles.footerbox}>

        <Icon
          name="circle"
          size={46}
          color='#3DDFFD'
          style={{ position: 'absolute', left:0, bottom: 6, marginHorizontal: 8, }}
        />
        <Icon
          name="bank"
          size={16}
          color='#FFFF'
          style={{ position: 'absolute', left:0, bottom: 21, marginHorizontal: 20, }}
        />
         <Text style={{ marginLeft: 59,marginBottom: 7,color: '#001830',fontSize: 12,fontWeight:'bold' }}  >Branch Service</Text> 

        </View>

        
        <View style={Styles.footerbox}>

        <Icon
          name="circle"
          size={46}
          color='#215CFC'
          style={{ position: 'absolute', left:0, bottom: 6, marginHorizontal: 8, }}
        />
        <Icon
          name="bank"
          size={16}
          color='#FFFF'
          style={{ position: 'absolute', left:0, bottom: 21, marginHorizontal: 20, }}
        />
         <Text style={{ marginLeft: 59,marginBottom: 7,color: '#001830',fontSize: 12,fontWeight:'bold' }}  >Make a payment</Text> 

        </View>


        </View>
         




       </View> 




    </View >



  );
}

const Styles = StyleSheet.create({
  container: {
    flex:1,
    padding:10,
    backgroundColor: '#ffff',
    paddingTop:58,
    borderRadius:25

  },
  header: {
    justifyContent: 'center',
    // backgroundColor: '#EFFE'

  },
  searchBox: {
    backgroundColor: "#EFF1FE",
    borderColor: "#E5E8FF",
    borderRadius: 8,
    width: 320,
    height: 40,
    marginTop: 18,
    marginLeft: 10,
    fontSize: 12,
    paddingHorizontal: 30,
    
    
   

  },
  box: {
    width: 130,
    height: 141,
    backgroundColor: '#01CD88',
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
    marginTop: 10,


  },

  footerbox: {
    width: 128,
    height: 56,
    backgroundColor: '#ffff',
    borderColor: "#D8D6D6",
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'left',
    borderRadius: 8,
    paddingHorizontal: 2,
    marginLeft: 27,
   


  },

  
  



});



export default HomePage;
