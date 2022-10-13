import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./CustomProperties/theme"
import { MyComponent } from "./Components/myComponent"
import { ButtonExample } from "./Components/buttonExample"

export default function App() {
  return (
    <PaperProvider theme={theme}>
      {/* <TopBar />

      <MainScreen /> */}
      <View style={styles.container}>
      <MyComponent />
      <ButtonExample />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
