import axios from 'axios'

const url = 'http://localhost:8080/api/coffeeType';

class CoffeeTypeService {

    getCoffeeTypes() {
        return axios.get(url);
    }
}

export default new CoffeeTypeService();