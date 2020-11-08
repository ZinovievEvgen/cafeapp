package back.controllers;

import back.models.CoffeeOrder;
import back.service_abst.CoffeeOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by SaidHazzarD on 23.10.2020.
 */

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/coffeeOrder")
public class CoffeeOrderController {

    @Autowired
    private CoffeeOrderService coffeeOrderService;

    @GetMapping("/get/{id}")
    public CoffeeOrder getCoffeeOrderById(@PathVariable long id) {
        return coffeeOrderService.getCoffeeOrderById(id);
    }

    @GetMapping("/allCoffeeOrders")
    public List<CoffeeOrder> getAllCoffeeOrder() {
        return coffeeOrderService.getAllCoffeeOrder();
    }

    @PostMapping(value = "/create")
    public void createCoffeeOrder(@RequestBody CoffeeOrder coffeeOrder) {
        coffeeOrderService.addCoffeeOrder(coffeeOrder);
    }

    @PutMapping("/update/{id}")
    public void updateCoffeeOrder(@RequestBody CoffeeOrder coffeeOrder) {
        coffeeOrderService.updateCoffeeOrder(coffeeOrder);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCoffeeOrderById(@PathVariable long id) {
        coffeeOrderService.deleteCoffeeOrderById(id);
    }

}
