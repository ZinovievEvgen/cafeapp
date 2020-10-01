import http from "../http-common";


class CoffeeTypeService {

    getCoffeeTypes() {
        return http.get("/coffeeTypes/allCoffeeTypes");
    }

    createCoffeeType(coffeeType) {
        return http.post("/coffeeTypes/create", coffeeType);
    }

    getCoffeeTypeById(coffeeTypeId) {
        return http.get(`/coffeeTypes/get/${coffeeTypeId}`);
    }

    deleteCoffeeType(coffeeTypeId) {
        return http.delete(`/coffeeTypes/delete/${coffeeTypeId}`);
    }

    updateCoffeeType(coffeeTypeId, coffeeType) {
        return http.put(`/coffeeTypes/update/${coffeeTypeId}`, coffeeType);
    }

    deleteAll() {
        return http.delete(`/coffeeTypes/deleteAll`);
    }

    findByName(name) {
        return http.get(`/coffeeTypesFind?name=${name}`);
    }
}

export default new CoffeeTypeService();