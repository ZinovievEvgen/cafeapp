import React from 'react';
import CoffeeTypeService from '../../service/CoffeeTypeService';

class CreateCoffeeTypeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.saveCoffeeType = this.saveCoffeeType.bind(this);
        this.newCoffeeType = this.newCoffeeType.bind(this);

        this.state = {
            idOfCoffeeType: null,
            nameOfCoffeeType: "",
            priceOfCoffeeType: "",

            submitted: false
        };
    }

    onChangeName(e) {
        this.setState({
            nameOfCoffeeType: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            priceOfCoffeeType: e.target.value
        });
    }

    saveCoffeeType() {
        var data = {
            nameOfCoffeeType: this.state.nameOfCoffeeType,
            priceOfCoffeeType: this.state.priceOfCoffeeType
        };

        CoffeeTypeService.createCoffeeType(data)
            .then(response => {
                this.setState({
                    idOfCoffeeType: response.data.idOfCoffeeType,
                    nameOfCoffeeType: response.data.nameOfCoffeeType,
                    priceOfCoffeeType: response.data.priceOfCoffeeType,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newCoffeeType() {
        this.setState({
            idOfCoffeeType: null,
            nameOfCoffeeType: "",
            priceOfCoffeeType: "",

            submitted: false
        });
    }

    cancel() {
        this.props.history.push('/coffeeTypes');
    }

    render() {
        return (
        <div className="submit-form">
            {this.state.submitted ? (
                <div>
                    <h4>Информация сохранена!</h4>
                    <button className="btn btn-success" onClick={this.newCoffeeType}>
                        Добавить
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="title">Наименование</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nameOfCoffeeType"
                            required
                            value={this.state.nameOfCoffeeType}
                            onChange={this.onChangeName}
                            name="nameOfCoffeeType"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Стоимость</label>
                        <input
                            type="text"
                            className="form-control"
                            id="priceOfCoffeeType"
                            required
                            value={this.state.priceOfCoffeeType}
                            onChange={this.onChangePrice}
                            name="priceOfCoffeeType"
                        />
                    </div>

                    <button onClick={this.saveCoffeeType} className="btn btn-success">
                        Сохранить
                    </button>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>
                        Отмена </button>
                </div>
            )}
        </div>
        )
    }
}

export default CreateCoffeeTypeComponent
