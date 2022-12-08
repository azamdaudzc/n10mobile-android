import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from 'react-native';
import Navigation from './src/Navigation';
import { Provider } from "react-redux";
import { store, persistor } from "./src/Store/store";
import { PersistGate } from "redux-persist/integration/react";
import Splash from './src/Screens/AuthScreens/Splash';

const App = () => {
  const [show, Setshow] = useState(true);

  useEffect(() => {
    Setshow(true)
    setTimeout(() => {
      Setshow(false)
    }, 1500);
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={{ flex: 1 }}>
            {/* <KeyboardAvoidingView style={{ flex: 1 }}> */}
            {/* <StatusBar translucent backgroundColor={"transparent"} barStyle={'dark-content'} /> */}
            {
              show == true ?
                <Splash />
                :
                <Navigation />
            }
            {/* </KeyboardAvoidingView> */}
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;