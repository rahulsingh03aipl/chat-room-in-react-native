// Chats component 


import React from 'react';
import {Text,View,ScrollView,Button,FlatList} from 'react-native'
import firebase from 'firebase';
import {users} from '../utils';
import {db} from '../firebase/config';

class Chats extends React.Component{

    constructor(props){
        super(props);
        
    }

    handlePress = (user) => {
        
        this.props.navigation.navigate("ChatWithpage",{
            id:user
        })
    }

    render(){

        let allUsers = Object.keys(users);
        console.log(allUsers)
        return(
        <ScrollView>
            <View>
                {allUsers.map(user=><Button title={user} key = {user} onPress={()=>this.handlePress(user)}></Button>)}
            </View>
            </ScrollView>
        )
    }
}

export default Chats;

