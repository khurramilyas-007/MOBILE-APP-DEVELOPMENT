import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
       <Image source={require('./assets/logo.png')} style={styles.logo}/>
      </View>
      <View style={styles.view2}>
        <Text style={styles.view2text}>SIGNUP FORM</Text>
      </View>
      <View style={styles.view3}>
        <TextInput placeholder="First name" style={styles.view3textinput}></TextInput>
      </View>
      <View style={styles.view4}>
      <TextInput placeholder="Last name" style={styles.view4textinput}></TextInput>
      </View>
      <View style={styles.view5}>
      <TextInput placeholder="Enter password" keyboardType="numeric" style={styles.view5textinput}></TextInput>
      </View>
      <View style={styles.view6}>
      <TextInput placeholder="Confirm password" keyboardType="numeric" style={styles.view6textinput}></TextInput>
      </View>
      
      <View style={styles.view7}>
        <TouchableOpacity style={styles.touchstyling}>
          <Text style={styles.text7a}>{'SIGN UP'}</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.view8}>
      <Text style={styles.view8text}>already have an account? LOGIN</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },

  view1:{
    flex:0.2,
    borderColor:'black',
    // borderWidth:1,
  },
  view2:{
    flex:0.1,
    borderColor:'black',
    // borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
   
  },
  view3:{
    flex:0.1,
    borderColor:'black',
    // borderWidth:1,
    justifyContent:'center',
  },
  view4:{
    flex:0.1,
    borderColor:'black',
    // borderWidth:1,
  },
  view5:{
    flex:0.1,
    borderColor:'black',
    // borderWidth:1,
  },
  view6:{
    flex:0.1,
    borderColor:'black',
    // borderWidth:1,
  },
  view7:{
    flex:0.1,
    borderColor:'black',
    // borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    
    
  },
  view2text:{
    fontWeight:'bold',
    fontSize:25, 
   
  },
  view3textinput:{
    borderWidth:1,
    height:60,
    margin:10,
    borderRadius:30,
    paddingEnd:30,
    padding:15,
  },
  view4textinput:{
    borderWidth:1,
    height:60,
    margin:10,
    borderRadius:30,
    paddingEnd:30,
    padding:15,
  },
  view5textinput:{
    borderWidth:1,
    height:60,
    margin:10,
    borderRadius:30,
    paddingEnd:30,
    padding:15,
  },
  view6textinput:{
    borderWidth:1,
    height:60,
    margin:10,
    borderRadius:30,
    paddingEnd:30,
    padding:15,
  },
  text7a:{
    color:'white',
    fontWeight:'600',
    fontSize:20,
    
  },
  touchstyling:{
   height:60,
   width:'80%',
   margintop:10,
   borderWidth:1,
   borderRadius:20,
   backgroundColor:'green',
   justifyContent:'center',
   alignItems:'center',
   fontWeight:'bold'

  },
  view8text:{
    marginLeft:75,
    marginTop:10,
    // justifyContent:'center',
    // alignItems:'center',
  },
  logo:{
    height:'70%',
    width:'70%',
    borderBottomWidth:1,
    borderBottomColor:'black',
    marginTop:50,
    borderRadius:15,
    
  }

  
});
