/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../crudapi2/redux/configStore';
import SplashScreen from 'react-native-splash-screen';
import {TabNavi} from './component_navigation/tab_navigation/Tab_navigation';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  },[]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavi />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
