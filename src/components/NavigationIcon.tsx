import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Home, Setting, Chart, File} from '../images';

interface NavigationIconProps {
  route: string;
  isFocused: boolean;
}

const buttomImages: any = {
  home: Home,
  settings: Setting,
  analytics: Chart,
  notes: File,
};

const NavigationIcon = ({route, isFocused}: NavigationIconProps) => {
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={buttomImages[route]}
        tintColor={isFocused ? 'blue' : 'white'}
      />
    </View>
  );
};

export default NavigationIcon;

const styles = StyleSheet.create({
  imageStyle: {
    width: 30,
    height: 30,
    resizeMode: 'center',
  },
});
