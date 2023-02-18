import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScreenWidth } from 'react-native-elements/dist/helpers';

export default class CreateReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: 'image_1',
      dropdownHeight: 40,
      light_theme: true,
    };
  }
  async addReport() {
    if (this.state.name && this.state.classGrade && this.state.section) {
      var today = new Date();
      var dd = String(today.getDate());
      var mm = String(today.getMonth() + 1); //January is 0!
      var yyyy = today.getFullYear();

      today = dd + '/' + mm + '/' + yyyy;

      let cardData = {
        name: this.state.name.toUpperCase(),
        classGrade: this.state.classGrade,
        section: this.state.section,

        engmarks:this.state.engmarks,
        mathmarks:this.state.mathmarks,
        sciencemarks:this.state.sciencemarks,
        socialmarks:this.state.socialmarks,
        hindimarks:this.state.hindimarks,
        telugumarks:this.state.telugumarks,

        engmarks2:this.state.engmarks2,
        mathmarks2:this.state.mathmarks2,
        sciencemarks2:this.state.sciencemarks2,
        socialmarks2:this.state.socialmarks2,
        hindimarks2:this.state.hindimarks2,
        telugumarks2:this.state.telugumarks2,

        //faAverage:this.state.faAverage,
       // absence:this.state.absence,
        attendence:this.state.attendence,

        created_on : today
      };
      var combine = this.state.name.toUpperCase() + this.state.classGrade;
      console.log(combine);
      await firebase
        .database()
        .ref('/reports/'+combine)
        .set(cardData)
        .then(function (snapshot) { alert('Saved')
       });
       this.props.navigation.navigate('CrFeed');
      console.log(cardData);
     
    }
    //alert(title, message?, buttons?, options?)
    // cancelable : Defines if alert can be dismissed by tapping outside of the alert box.
    else {
     
      Alert.alert(
        'Error',
        'All fields are required !!!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  }
  

  render() {
    return (
     
      <ImageBackground
        source={require('../assets/bg1.jpg')}
        style={styles.container}>
       
       <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' ,marginTop:10}}>
          <Image
            source={require('../assets/logo2.png')}
            style={styles.iconImage}></Image>
          <Text style={styles.titletext}>𝙰𝚌𝚑𝚒𝚎𝚟𝚎𝚛𝚜</Text>


        </View>

          {/* <View>
            <TouchableOpacity onPress={() =>
            this.props.navigation.navigate("CrFeed")}>
            <Image 
            source ={require("../assets/arrowImg.png")}
            style ={{
                      width:70,
                      height:70,
                      marginLeft:-10,
                      marginTop:-45,
                      borderColor:"black", 
                    }}>
              </Image>
              </TouchableOpacity>
            </View> */}

        <KeyboardAwareScrollView >
          <View style={styles.baseReport}>
            <Text
              style={{
                color: '#064663',
                fontSize: 30,
                marginLeft: 90,
               marginTop:-70,
                marginBottom: 40,
              }}>
              𝚁𝚎𝚙𝚘𝚛𝚝 𝙲𝚊𝚛𝚍
            </Text>

            <View
              style={{
                backgroundColor: '#F1F6F5',
                borderRadius: 20,
                width: 150,
                height: 60,
                marginTop: 10,
              }}>
              <TextInput
                style={styles.nameInput}
                onChangeText={(name) => this.setState({ name })}
                placeholder={'𝙽𝚊𝚖𝚎'}
                placeholderTextColor={'#064663'}
                placeholderColor={'#064663'}
              />
            </View>

            <View
              style={{
                backgroundColor: '#F1F6F5',
                borderRadius: 20,
                width: 100,
                height: 60,
                marginTop: -57,
                marginLeft: 165,
              }}>
              <TextInput
                style={styles.classInput}
                onChangeText={(classGrade) => this.setState({ classGrade })}
                placeholder={"𝙲𝚕𝚊𝚜𝚜"}
                placeholderTextColor={'#064663'}
                placeholderColor={"#064663"}
              />
            </View>

            <View
              style={{
                backgroundColor: "#F1F6F5",
                borderRadius: 20,
                width: 100,
                height: 60,
                marginTop: -59,
                marginLeft: 280,
              }}>
              <TextInput
                style={styles.secInput}
                onChangeText={(section) => this.setState({ section })}
                placeholder={'𝚂𝚎𝚌'}
                placeholderTextColor={"#064663"}
                placeholderColor={'#064663'}
              />
            </View>
            <View style={styles.subjects}>
              <Text
                style={{
                  marginTop: 5,
                  color: '#064663',
                  fontSize: 20,
                  marginLeft: 20,
                }}>
                𝚂𝚞𝚋𝚓𝚎𝚌𝚝
              </Text>

              <Text
                style={{
                  textAlign: 'center',
                  color:"#064663",
                  marginTop: -28,
                  fontSize:20
                }}>
                𝚂𝚊𝟷
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: "#064663",
                  marginTop:-25,
                  marginLeft:220 ,
                  fontSize:20
                  
                }}>
                𝚂𝚊𝟸
              </Text>

             <Text style={styles.subtext}> 𝙴𝚗𝚐𝚕𝚒𝚜𝚑 </Text>
                </View>
              {/*<Text style={styles.subtext}> 𝙼𝚊𝚝𝚑</Text>
              <Text style={styles.subtext}> 𝚂𝚌𝚒𝚎𝚗𝚌𝚎 </Text>
              <Text style={styles.subtext}> 𝚂𝚘𝚌𝚒𝚊𝚕 </Text>
              <Text style={styles.subtext}> 𝙷𝚒𝚗𝚍𝚒 </Text>
              <Text style={styles.subtext}> 𝚃𝚎𝚕𝚞𝚐𝚞 </Text>
              </View>*/}
            
          
        

             <TextInput
                style={{width: 110,
                  height: 57,
                  borderColor: '#064663',
                  borderWidth: 3,
                  marginTop: 30,
                  marginLeft: 130,
                  borderRadius: 20,
                  padding:20}}
                onChangeText={(engmarks) => this.setState({ engmarks })}
                placeholder={''}
                placeholderColor={"#064663"}
                placeholderTextColor={"#064663"}
              />

           <TextInput
                style={{width: 110,
                  height: 57,
                  borderColor: '#064663',
                  borderWidth: 3,
                  marginTop: 20,
                  marginLeft: 130,
                  borderRadius: 20,
                  padding:20}}
                onChangeText={(mathmarks) => this.setState({ mathmarks })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
              />

              <TextInput
                style={{width: 110,
                  height: 57,
                  borderColor: '#064663',
                  borderWidth: 3,
                  marginTop: 20,
                  marginLeft: 130,
                  borderRadius: 20,
                  padding:20}}
                onChangeText={(sciencemarks) => this.setState({ sciencemarks })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
              />
              <TextInput
                style={{width: 110,
                  height: 57,
                  borderColor: '#064663',
                  borderWidth: 3,
                  marginTop: 20,
                  marginLeft: 130,
                  borderRadius: 20,
                  padding:20}}
                onChangeText={(socialmarks) => this.setState({ socialmarks })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
              />

              <TextInput
                style={{width: 110,
                  height: 57,
                  borderColor: '#064663',
                  borderWidth: 3,
                  marginTop: 20,
                  marginLeft: 130,
                  borderRadius: 20,
                  padding:20}}
                onChangeText={(hindimarks) => this.setState({ hindimarks })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
              />
              <TextInput
                style={{width: 110,
                  height: 57,
                  borderColor: '#064663',
                  borderWidth: 3,
                  marginTop: 20,
                  marginLeft: 130,
                  borderRadius: 20,
                  padding:20}}
                onChangeText={(telugumarks) => this.setState({ telugumarks })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
              />

           
              

           
          

             <TextInput
                style={{width: 110,
                  height: 57,
                  borderColor: '#064663',
                  borderWidth: 3,
                  marginTop: -439,
                  marginLeft: 245,
                  borderRadius: 20,
                  padding:20}}
                onChangeText={(engmarks2) => this.setState({ engmarks2 })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
              />
             <TextInput
                style={{width: 110,
                  height: 57,
                  borderColor: '#064663',
                  borderWidth: 3,
                  marginTop: 20,
                  marginLeft: 245,
                  borderRadius: 20,
                  padding:20}}
                onChangeText={(mathmarks2) => this.setState({ mathmarks2})}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
              />

               <TextInput
                style={{width: 110,
                  height: 57,
                  borderColor: '#064663',
                  borderWidth: 3,
                  marginTop: 20,
                  marginLeft: 245,
                  borderRadius: 20,
                  padding:20}}
                onChangeText={(sciencemarks2) => this.setState({ sciencemarks2 })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
              />

              <TextInput
                style={{width: 110,
                  height: 57,
                  borderColor: '#064663',
                  borderWidth: 3,
                  marginTop: 20,
                  marginLeft: 245,
                  borderRadius: 20,
                  padding:20}}
                onChangeText={(socialmarks2) => this.setState({ socialmarks2 })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
              />

              <TextInput
                style={{width: 110,
                  height: 57,
                  borderColor: '#064663',
                  borderWidth: 3,
                  marginTop: 20,
                  marginLeft: 245,
                  borderRadius: 20,
                  padding:20}}
                onChangeText={(hindimarks2) => this.setState({ hindimarks2 })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
              />

              <TextInput
                style={{width: 110,
                  height: 57,
                  borderColor: '#064663',
                  borderWidth: 3,
                  marginTop: 20,
                  marginLeft: 245,
                  borderRadius: 20,
                  padding:20}}
                onChangeText={(telugumarks2) => this.setState({ telugumarks2 })}
                placeholder={''}
                placeholderColor={'#8E806A'}
                placeholderTextColor={'#8E806A'}
              />

              
               </View>
      
           
            <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.addReport()}>
            <Text style={styles.submitButtonText}> 𝓢𝓾𝓫𝓶𝓲𝓽 </Text>
          </TouchableOpacity>
               
                
        </KeyboardAwareScrollView>    
      
          
<View>
          <FlatList
            keyExtractor={this.keyExtractor}
            //data={}
            renderItem={this.renderItem}
            horizontal={true}></FlatList>
        </View>
        
      </ImageBackground>
      
  
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:ScreenWidth,

  },
  iconImage: {
    width: "25%",
    height: "120%",
    marginTop:30,
    marginLeft: RFValue(-10),
    borderRadius:45
  },
   titletext: {
    textAlign: 'center',
    color: '#FAAB78',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  baseReport: {
    backgroundColor:'#F1F6F5',
    width: 360,
    height: "720%",
    marginTop:100,
    alignContent:'center',
    marginLeft:2,
    marginRight:2,
    borderRadius: 20,
    bordercolor: '#064663',
  },
  androidView: {
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  
  nameInput: {
    width: 140,
    height: 60,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#064663',
    marginLeft: 3,
    paddingLeft:5,
  },
  classInput: {
    width: 90,
    height: 60,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#064663',
    marginLeft: -10,
    paddingLeft:5,
  },
  secInput: {
    width: 90,
    height: 60,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#064663',
    marginLeft: -24,
    paddingLeft:5,
  },
  submitButton: {
    marginTop: 20,
    marginRight:ScreenWidth-300,
    borderWidth: 2,
    borderColor: '#E4E9BE',
    //alignItems: 'center',
    alignSelf:'center',
    //justifyContent:'center',
    width: 150,
    height: 40,
    backgroundColor: '#FFF7BC',
    borderRadius: 10,
    fontSize:35,
  },
  subjects: {
    width: 360,
    height: 40,
    //backgroundcolor: "#064663",
    borderColor: '#064663',
    borderWidth: 3,
    borderRadius:30,
    marginTop: 30,
    marginRight: 10,
  },
  fa1: {
    width: 96,
    height: 360,
    color: 'white',
    borderColor: '',
    borderWidth: 3,
    marginTop: 385,
    marginLeft: 120,
    borderWidth: 3,
  },

  fa2: {
    width: 96,
    height: 360,
    color: 'white',
    borderColor: '#E4E9BE',
    borderWidth: 3,
    marginTop: -360,
    marginLeft: 220,
    borderWidth: 3,
  },
  extra: {
    width: ScreenWidth-25,
    height: 60,
    color: '#99A799',
    borderColor: '#99A799',
    borderWidth: 3,
    marginTop: 30,
    marginLeft:10,
    borderWidth: 2.5,
    alignSelf:"flex-start",
    alignContent:'center',
    
    alignContent:'center',
    flexDirection:'row',

  },
  text: {
    marginTop: 20,
    color: '#BB9981',
    fontSize:20,
  },
  subtext: {
    marginTop: 30,
    marginRight: 60,
    color: '#8E806A',
  },
attendenceinput:{
    width: 172,
    height: 35,
    color: '#8E806A',
    borderColor: '#BB9981',
    marginTop:10,
    marginLeft: 30,
    borderWidth:3,
    borderRadius:9 ,
    paddingLeft:5,
},
plaintext:{
fontSize:20,
textAlign:'center'
},
text1: {
    marginTop: 20,
    color: '#BB9981',
  },
  submitButtonText:{
fontSize:25,
textAlign:'center',
  },

});









