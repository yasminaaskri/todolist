import React from 'react';
import { View,Text, StyleSheet , TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';






const Home = () => {
  const navigation =useNavigation();
    return (
      
        <View style={styles.container}>
          <Text style={styles.textparent} >Todo
          <Text style={styles.textchild} >Lists</Text>
          </Text>
          <View  style={styles.btncontainer}>
          <TouchableOpacity  onPress={() => navigation.navigate('NewPage')}>
          <Icon name="plus" size={20} color={'#cdb4db'} style={styles.iconplus} />
          </TouchableOpacity>
          </View>
          <View style={styles.text2Container}>
          <Text style={styles.text2}>Add List</Text>
        </View>
          </View>
    );
  };
  
  const styles =StyleSheet.create(
    {
      container :{
        backgroundColor:'#bde0fe',
        flex:1,
       
      },
      textparent :{
        color:'black',
        fontSize:33,
        fontWeight:'800',
        paddingHorizontal: 65,
        paddingTop: 190,
      },
      textchild:{
        fontWeight:'300',
        color:'#ffafcc',
      },
      btncontainer:{
        padding:35,
        alignItems: 'center',
        justifyContent: 'center',
       },
     iconplus:{
      borderWidth: 1,
      width: 60,
      height: 60,
      borderColor: '#cdb4db',
      padding:21
     }, 
    
  
     text2Container: {
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    
     text2:{
      fontSize:20,
      color:"#ffafcc",
      
     
     }
    
    }
  );

  export default Home;