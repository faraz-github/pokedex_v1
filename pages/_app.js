//================================================================================= DEPENDENCIES
// MUI 
import { ThemeProvider } from "@mui/material";
import theme from "../MUI";

// External Dependencies
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// redux-persist
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
const persistConfig = {
  key: "pokemon-data",
  storage
}

// Local Dependencies
import reducers from '../reducers';

// COMPONENTS
import ButtonAppBar from "../components/Header";

// Global CSS
import '../styles/globals.css';

// Final Persisted Reducer For Data Persistance Locally
const persistedReducer = persistReducer(persistConfig, reducers);

//================================================================================= MAIN FUNCTION
function MyApp({ Component, pageProps }) {

  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);

  //================================================================================= RENDER
  return <>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ButtonAppBar />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </>

}

//================================================================================= EXPORT
export default MyApp
