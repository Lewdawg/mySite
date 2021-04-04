import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />

        <Switch>

          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
