import axios from 'axios'

const url = 'http://localhost:8088/api/coffeeType/';

class CoffeeTypeService {

    getCoffeeTypes() {
        return axios.get(url + 'allCoffeeTypes');
    }
}

export default new CoffeeTypeService();