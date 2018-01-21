import * as React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button color="danger" size="sm">
            sample small button
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
