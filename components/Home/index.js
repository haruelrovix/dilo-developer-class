/**
 * Home component
 *
 * It will have following:
 * - 2 input fields
 * - 1 submit button
 */

import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';

import InputComponent from '../Input';

const HomeComponent = () => {
  const [state, setState] = useState({
    owner: '',
    repository: '',
  });

  const handleChange = (newValue, name) => {
    setState(prevState => {
      console.log({prevState});
      return {
        ...prevState, // spread
        [name]: newValue,
      };
    });
  };

  return (
    <View>
      <InputComponent
        placeholder="GitHub owner"
        value={state.owner}
        name="owner"
        handleChange={handleChange}
      />
      <View style={styles.repositoryInput}>
        <InputComponent
          placeholder="Repository name"
          value={state.repository}
          name="repository"
          handleChange={handleChange}
        />
      </View>
      <Button title="Submit" disabled={!state.owner || !state.repository} />
    </View>
  );
};

const styles = StyleSheet.create({
  repositoryInput: {
    marginVertical: 12,
  },
});

export default HomeComponent;
