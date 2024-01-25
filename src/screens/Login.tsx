import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import CheckBox from '@react-native-community/checkbox';
import {Link} from '@react-navigation/native';

const Login = () => {
  const [rememberMeValue, setRememberMeValue] = useState(false);
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
      <View style={styles.rememberForgotpasswordContainer}>
        <View style={styles.rememberMeContainer}>
          <CheckBox
            tintColors={{true: '#ff0000'}}
            disabled={false}
            value={rememberMeValue}
            onValueChange={value => {
              setRememberMeValue(value);
            }}
          />
          <Text>Remember me</Text>
        </View>
        <Link to={{screen: 'forgotPassword'}} style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </Link>
      </View>
      <View style={styles.submitContainer}>
        <Button name="Login" />
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.dhac}>
          Don't have an account?
          <Link to={{screen: 'signup'}} style={styles.signupLink}>
            sign up
          </Link>
        </Text>
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
    marginTop: 50,
  },
  rememberForgotpasswordContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginRight: 5,
  },
  rememberMeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  forgotPassword: {},
  forgotPasswordText: {},
  bottomTextContainer: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    width: '100%',
  },
  dhac: {
    margin: 10,
  },
  signupLink: {
    color: 'blue',
    // textDecorationStyle
  },
});
