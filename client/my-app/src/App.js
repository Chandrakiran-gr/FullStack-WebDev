import logo from './logo.svg';
import './App.css';
import React , {Fragment} from "react"
import Home from "./Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Admin from "./Admin"
import Admin_dash from "./Admin_dash"


function App() {
  return (
    <div className="App">
    <Router>
<Fragment>

<Routes>

<Route path="/" element={<Home />}>
    
    </Route>

  <Route path="/admin" element={<Admin />}>
    
  </Route>
<Route path="/Admin_dash" element={<Admin_dash />} />

</Routes>
</Fragment>


</Router>
    
    
      
    
    
    </div>
  );
}

export default App;