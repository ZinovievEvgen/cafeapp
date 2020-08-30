import React from 'react';
import CoffeeTypeService from '../service/CoffeeTypeService';

class CoffeeTypeComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            coffeeTypes:[]
        }
    }

    componentDidMount(){
        CoffeeTypeService.getCoffeeTypes().then((response) => {
            this.setState({ coffeeTypes: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> CoffeeType List</h1>
                <table className = "table table-striped">
                    <thead>
                    <tr>

                        <td> Number</td>
                        <td> Name</td>
                        <td> Price</td>
                        <td> Enabled</td>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        this.state.coffeeTypes.map(
                            coffeeType =>
                                <tr key = {coffeeType.idOfCoffeeType}>
                                    <td> {coffeeType.idOfCoffeeType}</td>
                                    <td> {coffeeType.nameOfCoffeeType}</td>
                                    <td> {coffeeType.priceOfCoffeeType}</td>
                                    <td> {coffeeType.enabledCoffeeType}</td>
                                </tr>
                        )
                    }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default CoffeeTypeComponent