import React, { useRef } from 'react';
import Text from './Text';
import { Alert, Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';

const styles = StyleSheet.create({
  inputField: {
    flexGrow: 1,
    flexShrink: 1,
    margin: 10,
    borderStyle: "solid",
    borderColor: "#bbb",
    borderRadius: 5,
    borderWidth: 2,
    padding: 10
  },
  inputButton: {
    backgroundColor: theme.colors.primary,
    flexGrow: 1,
    flexShrink: 1,
    margin: 10,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",

  },
  buttonText: {
    color: "#fff",
    fontWeight: theme.fontWeights.bold,
  }
});


const SignInForm = ({ onSubmit }) => {

  const passwordRef = useRef();

  return (
    <>
      <FormikTextInput
        name="username"
        placeholder="Username"
        autoFocus={true}
        onSubmitEditing={() => passwordRef.current?.focus()}
        style={styles.inputField}
      />

      <FormikTextInput
        name="password"
        secureTextEntry
        autoFocus={true}
        placeholder="Password"
        style={styles.inputField}
        ref={passwordRef}
      />

      <Pressable
        style={styles.inputButton}
        onPress={onSubmit}>
        <Text
          style={styles.buttonText}

        >
          Sign In
        </Text>
      </Pressable>
    </>
  );
};

const SignIn = () => {

  const onSubmit = () => {
    Alert.alert('You pressed the text!');
  };

  return (
    <View>
      <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;