import React from 'react';
import CoffeeTypeService from '../../service/CoffeeTypeService';

class CreateCoffeeTypeComponent extends React.Component {


    cancel() {
        this.props.history.push('/coffeeTypes');
    }

    render() {
        return(
            <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}> Отмена </button>
        )
    }
}

export default CreateCoffeeTypeComponent
