import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/BottomTab';

export default App = () => {

  console.log("Main App Component Loaded!!!");

  return(
    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>
  );

};