import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTextStyle}>Welcome to Taskify</Text>
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.emailLabel}>Email Address</Text>
        <Input
          type="email"
          placeholder="Enter Email Address"
          iconName="email"
          validate
        />
      </View>
      <View style={styles.passwordContainer}>
        <Text style={styles.emailLabel}>Password</Text>
        <Input
          type="password"
          placeholder="Enter Password"
          disabled={false}
          iconName="password"
        />
      </View>
      <View style={styles.submitContainer}>
        <Button name="Submit" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  welcomeContainer: {
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  welcomeTextStyle: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  emailContainer: {},
  emailLabel: {
    marginLeft: 12,
  },
  passwordContainer: {
    marginTop: 20,
  },
  passwordLabel: {},
  submitContainer: {
    marginTop: 30,
  },
});
