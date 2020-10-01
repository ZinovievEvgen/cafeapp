import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="/" className="navbar-brand">CoffeeChangeApp</a>
                            </li>
                            <li className="nav-item">
                                <a href="/coffeeTypes" className="navbar-brand">CoffeeType</a>
                            </li>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent