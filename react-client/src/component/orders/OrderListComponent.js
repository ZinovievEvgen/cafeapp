import React, {Component} from 'react'
import CoffeeOrderService from '../../service/CoffeeOrderService';

class OrderListComponent extends Component {

    constructor(props) {
        super(props);
        this.retrieveOrders = this.retrieveOrders.bind(this);
        this.refreshOrders = this.refreshOrders.bind(this);
        this.setActiveOrder = this.setActiveOrder.bind(this);

        this.state = {
            orders: [],
            currentOrder: null,
            currentIndex: -1
        };
    }

    componentDidMount() {
        this.retrieveOrders();
    }

    retrieveOrders() {
        CoffeeOrderService.getCoffeeOrders()
            .then(response => {
                this.setState({
                    orders: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshOrders() {
        this.retrieveOrders();
        this.setState({
            currentOrder: null,
            currentIndex: -1
        });
    }

    setActiveOrder(order, index) {
        this.setState({
            currentOrder: order,
            currentIndex: index
        });
    }

    editOrder(coffeeOrderId) {
        this.props.history.push(`/updateOrder/${coffeeOrderId}`);
    }

    addOrder() {
        this.props.history.push('/addOrder');
    }

    render() {
        const {orders, currentOrder, currentIndex} = this.state;

        return (
            <div className="list-group">
                <div className="col-md-4">
                    <button
                        className="m-3 btn btn-sm btn-success"
                        onClick={ () => this.addOrder()}>
                        Добавить Заказ
                    </button>
                    <h4>Текущие заказы</h4>
                    <ul className="list-group">
                        {orders && orders.map((order, index) => (
                            <li className={"list-group-item " + (index === currentIndex ? "active" : "")}
                                onClick={() => this.setActiveOrder(order, index)}
                                key={index}>
                                {order.nameOfOrder}
                            </li>
                        ))}
                    </ul>
                    <h4>Готовые заказы</h4>
                    <ul className="list-group">
                        {orders && orders.map((order, index) => (
                            <li className={"list-group-item " + (index === currentIndex ? "active" : "")}
                                onClick={() => this.setActiveOrder(order, index)}
                                key={index}>
                                {order.nameOfOrder}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
export default  OrderListComponent