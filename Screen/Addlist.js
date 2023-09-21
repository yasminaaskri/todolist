import React from 'react';
import { View,Text, StyleSheet , TouchableOpacity , Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import ToDoLists from './ToDoLists';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";





function Addlist (props){
    const [todo, setTodo] = useState("");

    
//It allows you to dispatch actions to the Redux store.


    const dispatch = useDispatch();
  
    const onSubmitTask = () => {
      if (todo.trim().length === 0) {
        Alert.alert("You need to enter a task");
        setTodo("");
        return;
      }
  
      dispatch(
        addTask({
          task: todo,
        })
      );
      setTodo("");
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>create Todo list</Text>
            <TextInput style={styles.input} placeholder='List name ?'  placeholderTextColor="white"  onChangeText={setTodo}
          value={todo}/>
            <TouchableOpacity 
           
            style={styles.btn}   onPress={onSubmitTask}>
                <Text style={styles.textbtn}>create!</Text>
            </TouchableOpacity>
       <ToDoLists/>
        </View>
        
    );
}
const styles =StyleSheet.create(
{
container:{
    alignItems:'center',
    padding:50,
    flex:1,
    backgroundColor:'#a2d2ff',

    
},
text1:{
    color:'#cdb4db',
    fontSize:22,
    padding:20
},
input:{
    
    borderWidth:2,
    width:300,
    borderColor:"#cdb4db", 
    borderRadius:10,
    
},
btn:{
    borderWidth:2,
    marginTop: 20,
    width:300,
     backgroundColor:"#ffafcc",
     borderRadius:10,
     height:40,
     borderColor:"#cdb4db", 
}, 
textbtn:{
   padding:4,
   paddingHorizontal:120
}
} 
)


  export default Addlist;