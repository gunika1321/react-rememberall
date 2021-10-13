import React, { Component } from 'react';
import { render } from 'react-dom';
import Remember from './Remember';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Remember></Remember>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
