import React, { useRef } from 'react';
import Text from './Text';
import { Alert, Pressable, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';


const SignInForm = ({onSubmit}) => {

  const passwordRef = useRef();

  return (
    <>
      <FormikTextInput 
      name="username" 
      placeholder="Username" 
      returnKeyType="next"
      autoFocus={true}
      onSubmitEditing={() => passwordRef.current.focus()}/>
      
      <FormikTextInput 
      name="password" 
      secureTextEntry 
      placeholder="Password"
      ref={passwordRef}
       />
      
      <Pressable onPress={onSubmit}>
        <Text>Sign In</Text>
      </Pressable>
    </>
  );
};

const SignIn = () => {

  const onSubmit = () =>{
    Alert.alert('You pressed the text!');
  };

  return (
    <View>
      <Text>The Sign In view</Text>
      <Formik initialValues={{username: '', password:''}} onSubmit={onSubmit}>
        {({handleSubmit }) => <SignInForm onSubmit={handleSubmit}/> }
      </Formik>
    </View>
  );
};

export default SignIn;