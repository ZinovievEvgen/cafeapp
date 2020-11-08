package back.service_abst;

import back.models.CoffeeOrder;
import back.models.User;

import java.util.List;

/**
 * Created by SaidHazzarD on 20.08.2020.
 */
public interface CoffeeOrderService {

    CoffeeOrder getCoffeeOrderById(Long id);

    void addCoffeeOrder(CoffeeOrder coffeeOrder);

    List<CoffeeOrder> getAllCoffeeOrder();

    void deleteCoffeeOrderById(Long id);

    void updateCoffeeOrder(CoffeeOrder coffeeOrder);

    CoffeeOrder getCoffeeOrderByUser(User user);
}
