import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import globalStyles from './../styles/index';
import { GREEN } from './../styles/colors';

const styles = StyleSheet.create({
  welcomeText: {
    color: GREEN,
  },
});

const Home = () => (
  <View style={[
      globalStyles.container,
      globalStyles.center,
    ]}
  >
    <Text style={styles.welcomeText}>
      Welcome! Your app loaded!
    </Text>
  </View>
);

export default Home;
