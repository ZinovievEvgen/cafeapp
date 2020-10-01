import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CoffeeTypeComponent from './component/coffeeType/CoffeeTypeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateCoffeeTypeComponent from './component/coffeeType/CreateCoffeeTypeComponent';
import UpdateCoffeeTypeComponent from './component/coffeeType/UpdateCoffeeTypeComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                    <div className="container">
                        <Switch>
                            <Route path = "/coffeeTypes" component = {CoffeeTypeComponent}></Route>
                            <Route path = "/addCoffeeType" component = {CreateCoffeeTypeComponent}></Route>
                            <Route path = "/updateCoffeeType/:id" component = {UpdateCoffeeTypeComponent}></Route>
                            /*<Route path = "/view-coffeetype/:id" component = {CoffeeTypeComponent}></Route>*/
                            /* <Route path = "/update-coffeetype/:id" component = {CoffeeTypeComponent}></Route> */
                        </Switch>
                    </div>
                    <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
