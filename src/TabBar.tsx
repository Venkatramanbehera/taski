import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import NavigationIcon from './components/NavigationIcon';

const {width} = Dimensions.get('window');

const TabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={[styles.mainItemContainer]}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.iconContainer}>
                <NavigationIcon route={label} isFocused={isFocused} />
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#182028',
    borderRadius: 10,
    marginHorizontal: width * 0.1,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 10,
    borderRadius: 1,
    borderColor: '#333B42',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
