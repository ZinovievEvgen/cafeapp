import React from 'react';
import CoffeeTypeService from '../../service/CoffeeTypeService';

class UpdateCoffeeTypeComponent extends React.Component {


    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.getCoffeeType = this.getCoffeeType.bind(this);
        this.updateCoffeeType = this.updateCoffeeType.bind(this);
        this.deleteCoffeeType = this.deleteCoffeeType.bind(this);

        this.state = {
            currentCoffeeType: {
                idOfCoffeeType: null,
                nameOfCoffeeType: "",
                priceOfCoffeeType: ""
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getCoffeeType(this.props.match.params.id);
    }

    onChangeName(e) {
        const nameOfCoffeeType = e.target.value;

        this.setState(function (prevState) {
            return {
                currentCoffeeType: {
                    ...prevState.currentCoffeeType,
                    nameOfCoffeeType: nameOfCoffeeType
                }
            };
        });
    }

    onChangePrice(e) {
        const priceOfCoffeeType = e.target.value;

        this.setState(prevState => ({
            currentCoffeeType: {
                ...prevState.currentCoffeeType,
                priceOfCoffeeType: priceOfCoffeeType
            }
        }));
    }

    getCoffeeType(idOfCoffeeType) {
        CoffeeTypeService.getCoffeeTypeById(idOfCoffeeType)
            .then(response => {
                this.setState({
                    currentCoffeeType: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateCoffeeType() {
        CoffeeTypeService.updateCoffeeType(
            this.state.currentCoffeeType.idOfCoffeeType,
            this.state.currentCoffeeType
            )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "Обновление прошло успешно!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteCoffeeType() {
        CoffeeTypeService.deleteCoffeeType(this.state.currentCoffeeType.idOfCoffeeType)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/coffeeTypes')
            })
            .catch(e => {
                console.log(e);
            });
    }

    cancel() {
        this.props.history.push('/coffeeTypes');
    }

    render() {
        const {currentCoffeeType} = this.state;

        return (

            <div>
                {currentCoffeeType ? (
                    <div className="edit-form">
                        <h4>Выбранный тип кофе</h4>
                        <form>
                            <div className="form-group">
                                <label>Наименование:</label>
                                <input type="text" className="form-control" id="nameOfCoffeeType"
                                       value={currentCoffeeType.nameOfCoffeeType} onChange={this.onChangeName}/>
                            </div>
                            <div className="form-group">
                                <label>Стоимость:</label>
                                <input type="text" className="form-control" id="priceOfCoffeeType"
                                       value={currentCoffeeType.priceOfCoffeeType} onChange={this.onChangePrice}/>
                            </div>
                        </form>


                        <button
                            type="submit"
                            className="btn btn-sm btn-success"
                            onClick={this.updateCoffeeType}>
                            Обновить
                        </button>
                        
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={this.deleteCoffeeType} style={{marginLeft: "10px"}}>
                            Удалить
                        </button>

                        <button className="btn btn-sm btn-danger"
                                onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Отмена
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Tutorial...</p>
                    </div>
                )}
            </div>
        )
    }
}
export default UpdateCoffeeTypeComponent