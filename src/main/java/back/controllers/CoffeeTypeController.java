package back.controllers;

import back.models.CoffeeType;
import back.service_abst.CoffeeTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by SaidHazzarD on 30.08.2020.
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/coffeeTypes")
public class CoffeeTypeController {

    @Autowired
    private CoffeeTypeService coffeeTypeService;

    @GetMapping("/get/{id}")
    public CoffeeType getCoffeeTypeById(@PathVariable long id) {
        return coffeeTypeService.getCoffeeTypeById(id);
    }

    @GetMapping("/allCoffeeTypes")
    public List<CoffeeType> getAllCoffeeTypeBy() {
        return coffeeTypeService.getAllCoffeeType();
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
