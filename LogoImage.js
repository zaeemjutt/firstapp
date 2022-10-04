import React from "react";
import { View, Button, Text, StyleSheet,TouchableOpacity,  TextInput , RadioButton} from "react-native";
import { StatusBar} from "expo-status-bar";
import { useState } from "react";
import { ColorSpace, RollInRight } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AntDesign from '@expo/vector-icons/AntDesign';



const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export default function LogoImage({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if (!validateEmail(email)) {
      return alert("Kindly enter valid email address")
    }
    if (!password.trim() || password.length < 6) {
      return alert("6 digit password is required")
    }
    navigation.navigate("Home",{Email:email})
  }
  
  const Login = () => {
    
  }
  return (
    <View style={styles.container}>
    <View style={styles.direction}>
      
    <Text style={styles.login}>LOGIN</Text>
    <View style={styles.direction5}>
      <View style={styles.CircleShape}></View>
      <View style={styles.CircleShape1} ></View>
      </View>
      </View>
      <View style={styles.inputView}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
      <View style={styles.direction7}>
      <AntDesign style={styles.AntDesign} name="user" color="#800080" size={22} />
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          />
           </View>
           <View style={styles.direction8}>
      <AntDesign style={styles.AntDesign} name="lock" color="#800080" size={22} />
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        </View>
        </View>
      </View>
      <View style={styles.direction9}>
          <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
        <Text style={styles.loginBtn}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.radioButtonContainer}>
   <TouchableOpacity onPress={() => {}} style={styles.radioButton}>
     <View style={styles.radioButtonIcon} />
   </TouchableOpacity>
     <Text style={styles.radioButtonText}>Remember me</Text>
     </View>
 </View>
      <View style={styles.direction1}>
    <View style={styles.direction6}>
      <View style={styles.CircleShape2} ></View>
      <View style={styles.CircleShape3} ></View>
      </View>
      <Text style={styles.sign_up}>Sign Up</Text>
      
      </View>
    </View>
)
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
},

login: {
  
  fontWeight:'150',
  fontSize:40,
  color:"#000000",
},
CircleShape:{
  width: 45,
  height: 45,
  borderRadius: 150 / 2,
  backgroundColor: '#800080',

},
CircleShape1: {
  width: 75,
  height: 75,
  borderRadius: 150 / 2,
  backgroundColor: '#800080',
  marginRight: - 75/2
  
},
direction:{
  flexDirection:"row",
  justifyContent: 'space-between',
  alignItems: "center",
  width: '100%',
  
  
},
inputView: {
  backgroundColor: "FFC0CB",
  width: "90%",
  height: 45,
  marginBottom: 18,
},
TextInput: {
  height: 40,
  flex: 1,
  padding: -10,
  marginLeft: 20, 
},
AntDesign: {
  marginTop : 5,
  padding: 7,
},
loginBtn: {
  width: "50%",
  borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 25,
  marginLeft: 230,
  backgroundColor: "#800080",
},

sign_up: {
  fontWeight:'150',
  fontSize:40,
  color:"#000000",
},

CircleShape2:{
  width: 75,
  height: 75,
  borderRadius: 150 / 2,
  backgroundColor: '#800080',
  marginLeft: - 75/2,
},
CircleShape3:{
  width: 45,
  height: 45,
  borderRadius: 150 / 2,
  backgroundColor: '#800080',

},
direction1:{
  flexDirection: "row",
  justifyContent: 'space-between',
  alignItems: "center",
  width: '100%',
  
},
radioButtonContainer: {
  flexDirection: "row",
  justifyContent: 'space-between',
 width:"75%"
},
radioButton: {
  height: 20,
  width: 20,
  backgroundColor: "#F8F8F8",
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "#E6E6E6",
  alignItems:"center",

},
radioButtonIcon: {
  height: 14,
  width: 14,
  borderRadius: 8,
  backgroundColor: "#98CFB6"
},
radioButtonText: {
  fontSize: 16,
    
},
direction5:{
  flexDirection:"row", 
  justifyContent: "space-between",
  alignItems: 'center',
  width: '40%' 
},
direction6:{
  flexDirection:"row", 
  justifyContent: "space-between",
  width: '40%',
  alignItems:"center"
},
direction7:{
  justifyContent: "space-between",
  width: '100%',
  alignContent:"center",
  flexDirection:"row",
  
},
direction8:{
  justifyContent: "space-between",
  width: '100%',
  alignContent:"center",
  flexDirection:"row",
  
},
direction9:{
  flexDirection: "column",
  justifyContent: 'space-between',
  alignItems: "center",
  width: '100%',
  display:"flex",
},
});
   