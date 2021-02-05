import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Logs from './logs';
import Controls from './controls';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className="navigate">
        <Link to="controls"><span className="navi-el">Elevator</span></Link>
        <Link to="logs"> <span className="navi-el">Logs</span></Link>
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
