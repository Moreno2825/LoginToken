import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { persistStore } from "redux-persist";
import store from "./features/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//pasar el store y darle acceso al navegador
let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
