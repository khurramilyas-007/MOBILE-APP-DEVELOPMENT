import React from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={require('./assets/tiktok.jpeg')} style={styles.logo} />
      </View>

      <View style={styles.view2}>
        <View style={styles.view2a}>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            placeholderTextColor={'#999'}
          />
        </View>

       

        <View style={styles.view2c}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={'#999'}
            secureTextEntry={true}
          />
        </View>

        

        <TouchableOpacity style={styles.TouchableOpacity2e}>
          <Text style={styles.textTO2e}>{'SIGN UP'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view3}>
        <View style={styles.view3a}>
          <TouchableOpacity>
            <Text style={styles.view3aText}>
              {'Already Have an Account? LOGIN'}
            </Text>
          </TouchableOpacity>
        </View>

      

       
      </View>

      
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#fff',
  },

  view1: {
    flex: 0.4,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  view2: {
    flex: 0.4,
    // borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  view3: {
    flex: 0.2,
    // borderWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
  },
  

  // View 1 Element
  logo: {
    height: '20%',
    width: '60%',
  },

  // View 2 Elements

  view2a: {
    height: 60,
    width: '80%',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 30,
  },
  textInput: {
    color: '#000',
    paddingTop: 14,
    paddingLeft: 25,
    fontSize: 16,
  },

  view2c: {
    height: 60,
    width: '80%',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 30,
  },

  TouchableOpacity2e: {
    height: 50,
    width: '80%',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#FF0000',
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTO2e: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  //View 3 Elements
 
  view3aText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
  },

  



 
});

export default App;
