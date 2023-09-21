import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
//Ionicons
import Icon from 'react-native-vector-icons/FontAwesome';
//import useSelector from "react-redux";
import { useSelector } from "react-redux";
import { deleteTask } from "./taskSlice";
import { useDispatch } from "react-redux";


const ToDoLists = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.tasks);
  // console.log(todos);

  
  //delete item by checking if id is equal to the id of the item
  const onDelete = (id) => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  //renderItem function with a delete button
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}
        >
          <Icon name="trash" size={17} color="red"  />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={todos}  
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#cdb4db",
    padding:2,
    marginVertical: 18,
    marginHorizontal: 16,
    marginTop:15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    
    fontSize: 15,
    paddingRight:10,
  },
   
});
export default ToDoLists;