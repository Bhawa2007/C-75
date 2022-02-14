import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView
} from "react-native";
import firebase from "firebase";

const appIcon= require("/assets/appIcon.png")
const background= require("/assets/background1.png.jpg")
const appName=require("/assets/appName.png")

export default class Loginscreen extends Component{
constructor(props){
super(props);
this.state={
 email="",
 password=""
};
}
handleLogin=(email,password)=>{
firebase
.auth()
.signInWithEmailAndPassword(email,passowrd);
.then(()=>{
this.props.navigation.navigate(BottomTab);


})
.catch(error=>{
Alert.alert(error.message)

})
}
render(){
  const{email,passowrd}=this.state;
return(
<KeyboardAvoidingView behavior="padding" style={styles.container}>
<ImageBackground source={background} style={stytles.background}>
<View style={styles.UpperContainer}>
  <Image source={appIcon} style={styles.appIcon}/>
 <Image surce={appName} style={styles.appName}/>
</View>
<View styles={styles.lowerContainer}>
<TextInput 
style={styles.textinput}
onChangeText={text=>this.setState({email:text})}
placeholder={"Enter Email"}
placeholderTextColor={"#FFFFFF"}
autoFocus
/>
<TextInput
stye={[styles.textinput, {marginTopP:20}]}
onChangeText={text=>this.setState({password:text})}
placeholder={"Enter Password"}
placeholderTextColor={"#FFFFFF"}
secureTextEntry
/>
<TouchableOpacity
style={[styles.button,{marginTop:20}]}
onPress={()=>this.handleLogin(email,password)}
>
<Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>
</View>
</ImageBackground>
</KeyboardAvoidingView>
)
}
const style=StyleSheet.create({
container:{
flex:1,
backgroundColo:white
},
appIcon:{
 width:280,
 height:280,
 resizeMode:"contain",
 marginTop:80
},
appName:{
width:130,
height:130,
resizeMode:"contain",
},
background:{
flex:1,
resizeMode:"cover",
justifyContent:"center",



}



}
)