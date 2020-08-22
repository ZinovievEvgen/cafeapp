package back.service_impl;

import back.dao_abst.CoffeeOrderItemDao;
import back.models.CoffeeOrderItem;
import back.service_abst.CoffeeOrderItemService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by SaidHazzarD on 23.08.2020.
 */
public class CoffeeOrderItemServiceImpl implements CoffeeOrderItemService {

    @Autowired
    private CoffeeOrderItemDao coffeeOrderItemDao;

    @Override
    public CoffeeOrderItem getCoffeeOrderItemById(Long id) {
        return coffeeOrderItemDao.getByKey(id);
    }

    @Override
    public void addCoffeeOrderItem(CoffeeOrderItem coffeeOrderItem) {
        coffeeOrderItemDao.persist(coffeeOrderItem);
    }

    @Override
    public List<CoffeeOrderItem> getAllCoffeeOrderItem() {
        return coffeeOrderItemDao.getAll();
    }

    @Override
    public void deleteCoffeeOrderItemById(Long id) {
        coffeeOrderItemDao.deleteByKey(id);
    }

    @Override
    public void updateCoffeeOrderItem(CoffeeOrderItem coffeeOrderItem) {
        coffeeOrderItemDao.update(coffeeOrderItem);
    }
}
