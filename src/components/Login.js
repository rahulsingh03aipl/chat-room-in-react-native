import React from 'react';
import {TextInput,View,Text,Button,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import {db,app} from '../firebase/config';


const styles = StyleSheet.create({
    textinput: {
        height: 40,
        borderRadius:4,
        borderColor:'gray',
        borderWidth:1
    },
    button:{
        color: 'red',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green',
        height:20
    },
    buttonText:{
        marginBottom:"1px",
        marginTop:"1px"
    }
})


class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }

        db.ref("/users").on("value",(snapshot)=>{
           const userData = snapshot.val()
            const allUsers = JSON.stringify(userData);
            localStorage.setItem('users',allUsers);
        })
    }

  handlePress = ()=>{
       
        db.ref("/users").on("value",(snapshot)=>{
            const users = snapshot.val(); 
            if(this.state.email.replace(/\./g,"") in users){
                this.props.navigation.navigate("Chatpage");
                localStorage.setItem("currentUser",this.state.email)
            }else{
                alert("please try again")
            }
        })
    }

    goTORegister = ()=>{
        console.log("Go to register page");
        this.props.navigation.navigate("Registerpage")
    }

    handleEmail=(text)=>{
        this.setState({
            email:text
        })
    }

    handlePassword=(text)=>{
        this.setState({
            password:text
        })
    }


    render(){
    return (
    <ScrollView>
        <Text>Login To Continue</Text>
        <br />
        <View>
            
            <TextInput style={styles.textinput} placeholder="Email"    onChangeText ={this.handleEmail} ></TextInput><br />
            <TextInput style={styles.textinput} placeholder="Password" onChangeText ={this.handlePassword} ></TextInput><br />

            <Button
         onPress = {this.handlePress}
         title = "Login"
         color = "green"
      /><br />
      <Text>Haven't registered Yet ?</Text><br />
      <Button
         onPress = {this.goTORegister}
         title = "Register"
         color = "gray"
      />
        </View>
    </ScrollView>)
    }
}



export default Login;
