import axios from 'axios'

const url = 'http://localhost:8088/api/coffeeType/';

class CoffeeTypeService {

    getCoffeeTypes() {
        return axios.get(url + 'allCoffeeTypes');
    }

    createCoffeeType(coffeeType){
        return axios.post(url + 'create', coffeeType);
    }

    getCoffeeTypeById(coffeeTypeId){
        return axios.get(url + 'get/' + coffeeTypeId);
    }

    updateCoffeeType(coffeeType, coffeeTypeId){
        return axios.put(url + '/update/' + coffeeTypeId, coffeeType);
    }

    deleteCoffeeType(coffeeTypeId){
        return axios.delete(url + '/delete/' + coffeeTypeId);
    }
}

export default new CoffeeTypeService();