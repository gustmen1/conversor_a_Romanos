import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ConvertirNumerosRomanos from './components/ConvertirNumerosRomanos';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ConvertirNumerosRomanos />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#b2dfdb',
  },
});

export default App;
