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
import fetchGithubAPI from '../../lib/apiClient';

const HomeComponent = () => {
  const [state, setState] = useState({
    owner: '',
    repository: '',
  });

  const handleChange = (newValue, name) => {
    setState(prevState => {
      return {
        ...prevState, // spread
        [name]: newValue,
      };
    });
  };

  const handleButtonPress = async () => {
    const data = await fetchGithubAPI(state.owner, state.repository);
    console.log({data});
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
      <Button
        title="Submit"
        onPress={handleButtonPress}
        disabled={!state.owner || !state.repository}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  repositoryInput: {
    marginVertical: 12,
  },
});

export default HomeComponent;
