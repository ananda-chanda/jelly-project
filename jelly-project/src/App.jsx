

import React from 'react';
import Chat from './components/Chat';
import { Provider } from 'react-redux';
import { store } from "./redux/Store";

function App() {
  return (
    <div>

    <Provider store={store}>
      <Chat />
     </Provider>
     </div>
  );
}

export default App;
