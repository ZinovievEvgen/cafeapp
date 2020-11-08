import http from "../http-common";

class CoffeeOrderService {

    getCoffeeOrders() {
        return http.get("/coffeeOrder/allCoffeeOrders");
    }

    createCoffeeOrder(coffeeOrder) {
        return http.post("/coffeeOrder/create", coffeeOrder);
    }

    getCoffeeOrderById(coffeeOrderId) {
        return http.get(`/coffeeOrder/get/${coffeeOrderId}`);
    }

    deleteCoffeeOrder(coffeeOrderId) {
        return http.delete(`/coffeeOrder/delete/${coffeeOrderId}`);
    }

    updateCoffeeOrder(coffeeOrderId, coffeeOrder) {
        return http.put(`/coffeeOrder/update/${coffeeOrderId}`, coffeeOrder);
    }

    getCoffeeOrderByUser(coffeeOrderId) {
        return http.get(`/coffeeOrder/get/${coffeeOrderId}`);
    }
}

export default new CoffeeOrderService();