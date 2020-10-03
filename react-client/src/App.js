import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CoffeeTypeComponent from "./component/coffeeType/CoffeeTypeComponent";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import GlobalComponent from "./component/GlobalComponent"
import CreateCoffeeTypeComponent from "./component/coffeeType/CreateCoffeeTypeComponent";
import UpdateCoffeeTypeComponent from "./component/coffeeType/UpdateCoffeeTypeComponent";
import "./App.css";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                    <div className="container">
                        <Switch>
                            <Route exact path = "/" component = {GlobalComponent}></Route>
                            <Route path = "/coffeeTypes" component = {CoffeeTypeComponent}></Route>
                            <Route path = "/addCoffeeType" component = {CreateCoffeeTypeComponent}></Route>
                            <Route path = "/updateCoffeeType/:id" component = {UpdateCoffeeTypeComponent}></Route>
                        </Switch>
                    </div>
                    <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
