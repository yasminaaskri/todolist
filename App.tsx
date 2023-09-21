import React from 'react';
import { View,Text, StyleSheet , TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screen/Home'
import Addlist from './Screen/Addlist';
import ToDoLists from './Screen/ToDoLists';
import store from './Screen/store';
import { Provider } from "react-redux";

const Stack = createStackNavigator();

 function App() {
  
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewPage" component={Addlist} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}


  

export default App;
