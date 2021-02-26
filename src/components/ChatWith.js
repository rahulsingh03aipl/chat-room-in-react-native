import React from 'react';
import {ScrollView,View,Text,TextInput,StyleSheet, Button} from 'react-native';
import firebase from 'firebase';
import {db} from '../firebase/config';


const styles = StyleSheet.create({              
    postInput: {
    fontSize: 24,
    borderColor:'#42435b',
    borderWidth:1,
    margin:10,
    height:50,
    fontFamily: "Outrun future"
    },

    timeStyle:{
        textAlign:"right",
        marginTop:3
    },
    msgStyle:{
        marginTop:6,
        marginRight:6,
        borderWidth:2,
        borderColor:"blue",
        backgroundColor:"pink"
    },

    userStyle:{
        marginLeft:10,
        backgroundColor:"gray"
    }

    

})

class ChatWith extends React.Component{

    constructor(props){
        super(props);
        this.user = this.props.route.params.id;
        this.state = {
            messages:[],
            content:"",
            currentUser:localStorage.getItem("currentUser")
        }
    }

    async componentDidMount(){
        db.ref("/messages").on("value",snapshot=>{
            let messages = []
            snapshot.forEach((snap) => {
                messages.push(snap.val());
            });
            this.setState({ messages });
        })
    }

    handlePress = () =>{
        db.ref("/messages").push({
            timestamp:new Date(Date.now()).toString(),
            msg:this.state.content,
            user:this.state.currentUser
        }
          );
        this.setState({
            content:""
        })

    }

    handleChange =(text ) =>{
        this.setState({
            content:text
        })
    }

    render(){

        const currentUser = this.state.currentUser

        return(
            <ScrollView>
                <View>
                    <Text>
                        Chat with {this.user}
                    </Text><br/><br/>

                    {this.state.messages.map(msg => {
                        return <View><Text key={msg.timestamp} style ={styles.msgStyle} >{msg.msg}<Text style ={styles.userStyle}>{msg.user}</Text></Text><Text style ={styles.timeStyle}>{msg.timestamp}</Text></View> 
                    })}

                    <TextInput
                        style={styles.postInput}
                        onChangeText = {this.handleChange}
                        />

                    <Button title= "Send" onPress={this.handlePress} ></Button>
                </View>
            </ScrollView>
        )
    }
}

export default ChatWith;

