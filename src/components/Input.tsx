import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Email, HidePassword, Password, ShowPassword} from '../images';

type InputType = 'email' | 'password' | 'number' | 'phone';

interface InputProps {
  type: InputType;
  placeholder: string;
  disabled?: boolean;
  iconName?: InputType;
  validate?: boolean;
}

const keyboardType = {
  email: 'email-address',
  password: 'visible-password',
  phone: 'number-pad',
  number: 'number-pad',
  default: 'default',
};

const iconImage: any = {
  email: Email,
  password: Password,
};

const iconMapping: any = {
  email: iconImage.email,
  password: iconImage.password,
};

const keyboardTypeMapping: any = {
  email: keyboardType.email,
  password: keyboardType.default,
};

const Input = ({
  type,
  placeholder,
  disabled,
  iconName,
  validate,
}: InputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({email: '', password: ''});

  const handleChangeInput = (value: string) => {
    setInputValue(value);
    if (error.email || error.password) {
      setError({email: '', password: ''});
    }
  };

  const handleChangeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };

  const handleChangeEditing = (event: any) => {
    if (!validate) {
      return;
    }
    const inputTextValue = event.nativeEvent.text;
    if (type === 'email' && inputTextValue === '') {
      setError({...error, email: 'Email can not be empty'});
      return;
    } else if (type === 'password' && inputTextValue === '') {
      setError({...error, password: 'Password can not be empty'});
      return;
    } else if (type === 'email' && !validateEmail(inputTextValue)) {
      setError({...error, email: 'Email is invalid'});
    }
  };

  const selectedIcon = iconName && iconMapping[iconName];
  const selectedKeyboardType = keyboardTypeMapping[type];

  return (
    <>
      <View
        style={[
          styles.inputContainer,
          error.email ? styles.errorInputContainer : null,
          error.password ? styles.errorInputContainer : null,
        ]}>
        <View>
          <Image
            source={selectedIcon}
            style={[
              styles.iconImage,
              type === 'password' ? styles.passwordIcon : null,
            ]}
            tintColor={'grey'}
          />
        </View>
        <TextInput
          style={[
            styles.input,
            type === 'password' ? styles.passwordInput : null,
          ]}
          value={inputValue}
          onChangeText={handleChangeInput}
          placeholder={placeholder}
          keyboardType={selectedKeyboardType}
          onEndEditing={handleChangeEditing}
          keyboardAppearance="default"
          editable={!disabled ? true : false}
          enterKeyHint="enter"
          underlineColorAndroid={'transparent'}
          secureTextEntry={type === 'password' && showPassword === false}
        />
        <TouchableOpacity onPress={handleChangeShowPassword}>
          {type === 'password' && (
            <Image
              source={showPassword === false ? HidePassword : ShowPassword}
              style={[styles.iconImage]}
              tintColor={'grey'}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.errorContainer}>
        {error && error.email && (
          <Text style={styles.errorText}>{error.email}</Text>
        )}
        {error && error.password && (
          <Text style={styles.errorText}>{error.password}</Text>
        )}
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#e8e2e1',
  },
  input: {
    height: 40,
    margin: 5,
    padding: 10,
    width: '80%',
  },
  iconImage: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  passwordIcon: {
    marginLeft: 5,
  },
  passwordInput: {
    width: '70%',
  },
  errorContainer: {
    marginHorizontal: 5,
  },
  errorText: {
    color: '#d14136',
  },
  errorInputContainer: {
    borderColor: '#d14136',
  },
});
