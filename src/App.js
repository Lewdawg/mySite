import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Home'
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />

        <Switch>

          <Route exact path='/' component={Home} />

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
