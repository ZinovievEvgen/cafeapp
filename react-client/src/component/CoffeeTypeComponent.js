import React from 'react';
import CoffeeTypeService from '../service/CoffeeTypeService';

class CoffeeTypeComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            coffeeTypes: []
        }
        this.addCoffeeType = this.addCoffeeType.bind(this);
        this.editCoffeeType = this.editCoffeeType.bind(this);
        this.deleteCoffeeType = this.deleteCoffeeType.bind(this);
    }

    deleteCoffeeType(idOfCoffeeType){
        CoffeeTypeService.deleteCoffeeType(idOfCoffeeType).then( res => {
            this.setState({coffeeTypes: this.state.coffeeTypes.
                                        filter(coffeeType => coffeeType.idOfCoffeeType !== idOfCoffeeType)});
        });
    }
    getCoffeeType(idOfCoffeeType){
        this.props.history.push(`/getCoffeeType/${idOfCoffeeType}`);
    }
    editCoffeeType(idOfCoffeeType){
        this.props.history.push(`/addCoffeeType/${idOfCoffeeType}`);
    }

    componentDidMount(){
        CoffeeTypeService.getCoffeeTypes().then((res) => {
            this.setState({ coffeeTypes: res.data});
        });
    }

    addCoffeeType(){
        this.props.history.push('/addCoffeeType/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">CoffeeType List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCoffeeType}> Add CoffeeType</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th> Number</th>
                            <th> Name</th>
                            <th> Price</th>
                            <th> Enabled</th>
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
                                        <td>
                                            <button onClick={ () => this.editCoffeeType(coffeeType.idOfCoffeeType)} 
                                                    className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCoffeeType(coffeeType.idOfCoffeeType)} 
                                                    className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.getCoffeeType(coffeeType.idOfCoffeeType)} 
                                                    className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CoffeeTypeComponent