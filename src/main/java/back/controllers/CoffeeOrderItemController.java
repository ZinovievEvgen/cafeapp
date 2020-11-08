package back.controllers;

import back.models.CoffeeOrderItem;
import back.service_abst.CoffeeOrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by SaidHazzarD on 23.10.2020.
 */

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/coffeeOrderItem")
public class CoffeeOrderItemController {

    @Autowired
    private CoffeeOrderItemService coffeeOrderItemService;

    @GetMapping("/get/{id}")
    public CoffeeOrderItem getCoffeeOrderItemById(@PathVariable long id) {
        return coffeeOrderItemService.getCoffeeOrderItemById(id);
    }

    @GetMapping("/allCoffeeOrderItem")
    public List<CoffeeOrderItem> getAllCoffeeOrderItem() {
        return coffeeOrderItemService.getAllCoffeeOrderItem();
    }

    @GetMapping("/itemsByCurrentOrder")
    public List<CoffeeOrderItem> getCoffeeOrderItemsByCurrentOrder() {
        return null;
    }

    @PostMapping(value = "/create")
    public void createCoffeeOrderItem(@RequestBody CoffeeOrderItem coffeeOrderItem) {
        coffeeOrderItemService.addCoffeeOrderItem(coffeeOrderItem);
    }

    @PutMapping("/update/{id}")
    public void updateCoffeeOrderItem(@RequestBody CoffeeOrderItem coffeeOrderItem) {
        coffeeOrderItemService.updateCoffeeOrderItem(coffeeOrderItem);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCoffeeOrderItemById(@PathVariable long id) {
        coffeeOrderItemService.deleteCoffeeOrderItemById(id);
    }
}
