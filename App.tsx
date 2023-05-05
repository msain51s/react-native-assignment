/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {RootNavigation} from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
