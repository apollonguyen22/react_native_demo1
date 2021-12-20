/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/configStore';
import SplashScreen from 'react-native-splash-screen';
import Root from './Root';


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  },[]);

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
