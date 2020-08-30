package back.controllers;

import back.models.CoffeeType;
import back.service_abst.CoffeeTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by SaidHazzarD on 30.08.2020.
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/coffeeType")
public class CoffeeTypeController {

    @Autowired
    private CoffeeTypeService coffeeTypeService;

    @GetMapping("/get/{id}")
    public CoffeeType getCoffeeTypeById(@PathVariable long id) {
        return coffeeTypeService.getCoffeeTypeById(id);
    }

    @PostMapping("/create")
    public void createCoffeeTypeById(@RequestBody CoffeeType coffeeType) {
        coffeeTypeService.addCoffeeType(coffeeType);
    }

    @PutMapping("/update/{id}")
    public void updateCoffeeTypeBy(@RequestBody CoffeeType coffeeType) {
        coffeeTypeService.updateCoffeeType(coffeeType);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCoffeeTypeById(@PathVariable long id) {
        coffeeTypeService.deleteCoffeeTypeById(id);
    }
}
