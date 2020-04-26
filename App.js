/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const App = () => (
  <View style={styles.body}>
    <SafeAreaView>
      <Text>Hello QR</Text>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
});

export default App;
