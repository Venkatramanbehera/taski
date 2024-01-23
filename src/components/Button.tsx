import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonProps {
  name: string;
  disabled?: boolean;
  buttonStyles?: object;
}

const Button = ({name, disabled, buttonStyles}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.shadowContainer, {...buttonStyles}]}
      disabled={disabled ? disabled : false}>
      <Text style={styles.buttonStyle}>{name && name}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d14136',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    margin: 5,
  },
  buttonStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  shadowContainer: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});
