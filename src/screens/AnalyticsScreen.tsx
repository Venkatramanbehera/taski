import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AnalyticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AnalyticsScreen</Text>
    </View>
  );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
