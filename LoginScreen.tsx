import React, { useState } from 'react';
import { StyleSheet, View,Button,TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

const LoginScreen = ({navigation}) => {
  
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // const handleLogin = () => {
  //   // handle login logic
  //   navigation.navigator('Home')
  // };

  return (

      <View style={styles.formContainer}>
        <Text style={{marginBottom:50,fontSize:40,position:'absolute', top:100,fontWeight:"700"}}>Scrap buddy</Text>
        <TextInput
          placeholder="Email"
          // leftIcon={<FontAwesome name="envelope-o" size={24} color="black" />}
          value={email}
          onChangeText={setEmail}
          style={styles.inputContainer}
          />
        <TextInput
          placeholder="Password"
          // leftIcon={<FontAwesome name="lock" size={24} color="black" />}
          // secureTextEntry
          style={styles.inputContainer}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate('Home')}>
          <Text style={styles.buttonStyle}> Login</Text>
        </TouchableOpacity>
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    position:'relative'
  },
  inputContainer: {
    marginVertical: 10,
    width: '80%',
    maxWidth: 400,
    fontSize: 18,
    paddingVertical: 10,
    textAlign:'center',
    marginTop:10,
    borderWidth:1,
    borderRadius:10,
  },
 
  buttonContainer: {
    marginTop:30,
    marginVertical: 10,
    width: '50%',
    maxWidth: 400,
  },
  buttonStyle: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 12,
    textAlign:"center"
  },
  buttonTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    marginTop: 20,
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});


export default LoginScreen;
