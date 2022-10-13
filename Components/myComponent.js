import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-paper';


export const MyComponent = (props) => {
  const { colors } = useTheme();
  return <Text style={{ color: colors.primary }}>Hello World!</Text>;
}