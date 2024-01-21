import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {RootStack} from './navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Store, {persistor} from './shared/redux/store';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
