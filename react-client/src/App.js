import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import GlobalComponent from "./component/GlobalComponent"
import CoffeeTypeComponent from "./component/coffeeType/CoffeeTypeComponent";
import CreateCoffeeTypeComponent from "./component/coffeeType/CreateCoffeeTypeComponent";
import UpdateCoffeeTypeComponent from "./component/coffeeType/UpdateCoffeeTypeComponent";
import UserListComponent from "./component/users/UserListComponent";
import CreateUserComponent from "./component/users/CreateUserComponent";
import UpdateUserComponent from "./component/users/UpdateUserComponent";
import RoleListComponent from "./component/roles/RoleListComponent";
import CreateRoleComponent from "./component/roles/CreateRoleComponent";
import UpdateRoleComponent from "./component/roles/UpdateRoleComponent";
import OrderListComponent from "./component/orders/OrderListComponent";
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
                            <Route path = "/users" component = {UserListComponent}></Route>
                            <Route path = "/addUser" component = {CreateUserComponent}></Route>
                            <Route path = "/updateUser/:id" component = {UpdateUserComponent}></Route>
                            <Route path = "/roles" component = {RoleListComponent}></Route>
                            <Route path = "/addRole" component = {CreateRoleComponent}></Route>
                            <Route path = "/updateRole/:id" component = {UpdateRoleComponent}></Route>
                            <Route path = "/orders" component = {OrderListComponent}></Route>
                        </Switch>
                    </div>
                    <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
