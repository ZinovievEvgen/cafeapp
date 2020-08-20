package back.service_abst;

import back.models.CoffeeType;

import java.util.List;

/**
 * Created by SaidHazzarD on 20.08.2020.
 */
public interface CoffeeTypeService {

    CoffeeType getCoffeeTypeById(Long id);

    void addCoffeeType(CoffeeType coffeeType);

    List<CoffeeType> getAllCoffeeType();

    void deleteCoffeeTypeById(Long id);

    void updateCoffeeType(CoffeeType coffeeType);
}
