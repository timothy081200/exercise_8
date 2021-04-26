/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../components/Atoms/TextInput';
import Gap from '../../components/Atoms/Gap';
import Button from '../../components/Atoms/Button';
import Button1 from '../../components/Atoms/Button1';

const SignIN = () => {
  return (
  <View>
    <Text>Sign In Pages</Text>
  </View>
  );
};

export default SignIN;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 33,
  },
});
