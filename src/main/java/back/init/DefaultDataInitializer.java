package back.init;

import back.models.CoffeeType;
import back.service_abst.CoffeeTypeService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by SaidHazzarD on 30.08.2020.
 */
public class DefaultDataInitializer {


    @Autowired
    private CoffeeTypeService coffeeTypeService;

    private void init() throws Exception {
        CoffeeType latte = new CoffeeType();
        latte.setNameOfCoffeeType("Latte");
        latte.setPriceOfCoffeeType(100);
        latte.setEnabledCoffeeType(true);
        coffeeTypeService.addCoffeeType(latte);
    }
}
