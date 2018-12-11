import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

import './style.styl';

class App extends Component {

  public render() {

    return (
      <div className="landing">
        <h1>h1</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
