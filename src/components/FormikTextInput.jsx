import React from 'react';
import Text from './Text';
import { StyleSheet, TextInput } from 'react-native';
import { useField } from 'formik';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5
  }
});

const FormikTextInput = React.forwardRef((props, ref) => {
  const [field, meta, helpers] = useField(props.name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        ref={ref}
        onChangeText={value => helpers.setValue(value)}
        onBlur={()=> helpers.setTouched(true)}
        value={field.value}
        error={showError}
      
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
});

FormikTextInput.displayName = "FormikInputText";

export default FormikTextInput;