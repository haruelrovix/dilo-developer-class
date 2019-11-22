/**
 * Input component
 *
 * For inputting text into the app via a keyboard
 */

import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const InputComponent = props => {
  const onChangeText = newValue => {
    props.handleChange(newValue, props.name);
  };

  return (
    <TextInput
      style={styles.textInput}
      onChangeText={onChangeText}
      value={props.value}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default InputComponent;
