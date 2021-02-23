import React from "react"
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Login from "./Login";
import Signup from "./Signup"
const App = () =>{

    return(
    <Router>
        <Switch>
            <Route path="/" exact component={Login} ></Route>
            <Route path='/signup' component={Signup} ></Route>
        </Switch>
    </Router>
    )
}

export default App;