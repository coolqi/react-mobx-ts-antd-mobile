import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '@src/pages/Home'

import './App.less';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
