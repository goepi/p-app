import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { RootState } from './reducers/types';

interface Props {
  store: Store<RootState>;
}

const App: React.FC<Props> = ({ store }) => {
  return (
    <Provider store={store}>
      <div>Hello</div>
    </Provider>
  );
};

export default App;
