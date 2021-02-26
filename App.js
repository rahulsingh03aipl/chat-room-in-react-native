import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';
import Register from './src/components/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Chats from './src/components/Chats';
import ChatWith from './src/components/ChatWith';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Loginpage"
          component={Login}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
         name="Registerpage" 
         component={Register}
         options={{ title: 'You are on register page' }}/>
         <Stack.Screen
         name="Chatpage" 
         component={Chats}
         options={{ title: 'You are on Chat page' }}/>
         <Stack.Screen
         name="ChatWithpage" 
         component={ChatWith}
         options={{ title: 'You are on ChatWith page' }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
