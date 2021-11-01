import React from 'react'
import { Provider } from 'react-redux'
import 'react-native-gesture-handler'
import Navigaror from './src/components/navigator/navigaror'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Navigaror />
    </Provider>
  );
};

export default App
