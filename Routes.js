import React from 'react';
import {NativeRouter, Route} from 'react-router-native';

import AppComponent from './components/App';
import CommitsComponent from './components/Commits';

const Routes = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={AppComponent} />
      <Route path="/commits" component={CommitsComponent} />
    </NativeRouter>
  );
};

export default Routes;
