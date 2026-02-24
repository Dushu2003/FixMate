import React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/rootNavigation';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>

        <RootNavigation/>
       
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;