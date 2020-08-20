package back.service_abst;

import back.models.CoffeeOrderItem;

import java.util.List;

/**
 * Created by SaidHazzarD on 20.08.2020.
 */
public interface CoffeeOrderItemService {

    CoffeeOrderItem getCoffeeOrderItemById(Long id);

    void addCoffeeOrderItem(CoffeeOrderItem coffeeOrderItem);

    List<CoffeeOrderItem> getAllCoffeeOrderItem();

    void deleteCoffeeOrderItemById(Long id);

    void updateCoffeeOrderItem(CoffeeOrderItem coffeeOrderItem);
}
