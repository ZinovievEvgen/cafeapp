import React from 'react';
import CoffeeTypeService from '../../service/CoffeeTypeService';

class CoffeeTypeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeSearchNameCoffeeTypes = this.onChangeSearchNameCoffeeTypes.bind(this);
        this.retrieveCoffeeTypes = this.retrieveCoffeeTypes.bind(this);
        this.refreshListCoffeeTypes = this.refreshListCoffeeTypes.bind(this);
        this.setActiveCoffeeType = this.setActiveCoffeeType.bind(this);
        this.removeAllCoffeeTypes = this.removeAllCoffeeTypes.bind(this);
        this.searchName = this.searchName.bind(this);

        this.state = {
            coffeeTypes: [],
            currentCoffeeType: null,
            currentIndex: -1,
            searchName: ""
        };
    }

    componentDidMount() {
        this.retrieveCoffeeTypes();
    }

    onChangeSearchNameCoffeeTypes(e) {
        const searchName = e.target.value;

        this.setState({
            searchName: searchName
        });
    }

    retrieveCoffeeTypes() {
        CoffeeTypeService.getCoffeeTypes()
            .then(response => {
                this.setState({
                    coffeeTypes: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshListCoffeeTypes() {
        this.retrieveCoffeeTypes();
        this.setState({
            currentCoffeeType: null,
            currentIndex: -1
        });
    }

    setActiveCoffeeType(coffeeType, index) {
        this.setState({
            currentCoffeeType: coffeeType,
            currentIndex: index
        });
    }

    removeAllCoffeeTypes() {
        CoffeeTypeService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshListCoffeeTypes();
            })
            .catch(e => {
                console.log(e);
            });
    }

    searchName() {
        CoffeeTypeService.findByName(this.state.searchName)
            .then(response => {
                this.setState({
                    coffeeTypes: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    editCoffeeType(idOfCoffeeType) {
        this.props.history.push(`/updateCoffeeType/${idOfCoffeeType}`);
    }

    addCoffeeType(){
        this.props.history.push('/addCoffeeType');
    }

    render() {
        const {searchName, coffeeTypes, currentCoffeeType, currentIndex} = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Поиск по названию"
                            value={searchName}
                            onChange={this.onChangeSearchNameCoffeeTypes}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchName}>Поиск
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Список кофе по типам</h4>
                    <ul className="list-group">
                        {coffeeTypes &&
                        coffeeTypes.map((coffeeType, index) => (
                            <li
                                className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                                onClick={() => this.setActiveCoffeeType(coffeeType, index)}
                                key={index}
                            >
                                {coffeeType.nameOfCoffeeType}
                            </li>
                        ))}
                    </ul>
                    <button
                        className="m-3 btn btn-sm btn-success"
                        onClick={ () => this.addCoffeeType()}>
                        Добавить
                    </button>
                    <button
                        className="m-3 btn btn-sm btn-danger"
                        onClick={this.removeAllCoffeeTypes}>
                        Удалить все
                    </button>
                </div>

                <div className="col-md-6">
                    {currentCoffeeType ? (
                        <div>
                            <h4>Выбранный тип кофе</h4>
                            <div>
                                <label>
                                    <strong>Наименование:</strong>
                                </label>{" "}
                                {currentCoffeeType.nameOfCoffeeType}
                            </div>
                            <div>
                                <label>
                                    <strong>Стоимость:</strong>
                                </label>{" "}
                                {currentCoffeeType.priceOfCoffeeType}
                            </div>
                            <button onClick={ () => this.editCoffeeType(currentCoffeeType.idOfCoffeeType)}
                                    className="btn btn-sm btn-info">Изменить
                            </button>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Выберите необходимый тип кофе...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default CoffeeTypeComponent