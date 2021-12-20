/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {TabNavi} from '../navigations/tab_navigation/Tab_navigation';
import Loader from '../containers/loader/Loader';

const Root = () => {
  return (
    <>
      <Loader />
      <NavigationContainer>
        <TabNavi />
      </NavigationContainer>
    </>
  );
};

export default Root;
