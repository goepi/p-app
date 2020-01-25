import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { RootState } from './reducers/types';
import { Dashboard } from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';

interface Props {
  store: Store<RootState>;
}

const App: React.FC<Props> = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Dashboard />
      </Router>
    </Provider>
  );
};

export default App;
