import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {PI} from './';

const PIComp = () => {
  return(
    <View style={s.container}>
      <Text>PI is {PI}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {

  }
});

export default PIComp;
