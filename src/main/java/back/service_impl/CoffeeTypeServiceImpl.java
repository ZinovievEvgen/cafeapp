package back.service_impl;

import back.dao_abst.CoffeeTypeDao;
import back.models.CoffeeType;
import back.service_abst.CoffeeTypeService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by SaidHazzarD on 23.08.2020.
 */
public class CoffeeTypeServiceImpl implements CoffeeTypeService {

    @Autowired
    private CoffeeTypeDao coffeeTypeDao;

    @Override
    public CoffeeType getCoffeeTypeById(Long id) {
        return coffeeTypeDao.getByKey(id);
    }

    @Override
    public void addCoffeeType(CoffeeType coffeeType) {
        coffeeTypeDao.persist(coffeeType);
    }

    @Override
    public List<CoffeeType> getAllCoffeeType() {
        return coffeeTypeDao.getAll();
    }

    @Override
    public void deleteCoffeeTypeById(Long id) {
        coffeeTypeDao.deleteByKey(id);
    }

    @Override
    public void updateCoffeeType(CoffeeType coffeeType) {
        coffeeTypeDao.update(coffeeType);
    }
}
