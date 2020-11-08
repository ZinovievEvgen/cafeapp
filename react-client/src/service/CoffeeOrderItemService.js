import http from "../http-common";

class CoffeeOrderItemService {

    getCoffeeOrderItems() {
        return http.get("/coffeeOrderItem/allCoffeeOrders");
    }

    createCoffeeOrderItem(coffeeOrderItem) {
        return http.post("/coffeeOrderItem/create", coffeeOrderItem);
    }

    getCoffeeOrderItemById(coffeeOrderItemId) {
        return http.get(`/coffeeOrderItem/get/${coffeeOrderItemId}`);
    }

    deleteCoffeeOrderItem(coffeeOrderItemId) {
        return http.delete(`/coffeeOrderItem/delete/${coffeeOrderItemId}`);
    }

    updateCoffeeOrderItem(coffeeOrderItemId, coffeeOrderItem) {
        return http.put(`/coffeeOrderItem/update/${coffeeOrderItemId}`, coffeeOrderItem);
    }

    getCoffeeOrderItemByCurrentOrder() {
        return http.get("/coffeeOrderItem/itemsByCurrentOrder");
    }
}

export default new CoffeeOrderItemService();