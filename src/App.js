import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Logs from './logs';
import Controls from './controls';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className="navigate">
          <span className="navi-el"><Link to="controls">Elevator</Link></span>
          <span className="navi-el"><Link to="logs">Logs</Link></span>
      </div>
      <Switch>
          <Route exact path="/" component={Controls} />
          <Route path="/controls" component={Controls} />
          <Route path="/logs" component={Logs} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
