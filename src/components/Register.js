import React,{Component} from 'react';
import {TextInput,View,Text,Button,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import {app} from '../firebase/config';
import {db} from '../firebase/config';


const styles = StyleSheet.create({
    textinput: {
        height: 40,
        borderRadius:4,
        borderColor:'gray',
        borderWidth:1
    },
    
    
})


class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            password:""
        }
        this.handleRegister = this.handleRegister.bind(this)
        this.goTOLogin = this.goTOLogin.bind(this)
     
    }

    handleName=async (text)=>{
        this.setState({
            name:text
        })
    }
    handleEmail=async (text)=>{
        this.setState({
            email:text
        })
    }
     handlePassword= async (text)=>{
        this.setState({
            password:text
        })
    }

    handleRegister(){
       db.ref("/users/" + this.state.email.replace(/\./g,"")).set({ "name": this.state.name, "email": this.state.email, "password": this.state.password})
       this.setState({
        name:"",
        email:"",
        password:""
    })
    }


    goTOLogin(){
        console.log("Go to Login page");
        this.props.navigation.navigate("Loginpage")
    }

    render(){
    return (
    <ScrollView>
        <Text>Create Your New ID</Text>
        <br />
        <View>
            
            
        <TextInput  Name="name" style={styles.textinput} placeholder="Name"   onChangeText = {this.handleName} ></TextInput><br />
        <TextInput  Name="email"     style={styles.textinput} placeholder="Email"  onChangeText = {this.handleEmail}       ></TextInput><br />
        <TextInput  Name="password" style={styles.textinput} placeholder="Password" onChangeText = {this.handlePassword}   ></TextInput><br />

            <Button
         onPress = {this.handleRegister}
         title = "Register"
         color = "blue"
         onChangeText = {this.handleRegister}
      /><br />
      <Text>Already a user ?</Text><br />
      <Button
         onPress = {this.goTOLogin}
         title = "Login"
         color = "gray"
      />
        </View>
    </ScrollView>)
    }
}



export default Register;

