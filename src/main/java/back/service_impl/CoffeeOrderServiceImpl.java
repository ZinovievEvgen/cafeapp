package back.service_impl;

import back.dao_abst.CoffeeOrderDao;
import back.models.CoffeeOrder;
import back.service_abst.CoffeeOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by SaidHazzarD on 23.08.2020.
 */
@Service
public class CoffeeOrderServiceImpl implements CoffeeOrderService {

    @Autowired
    private CoffeeOrderDao coffeeOrderDao;

    @Override
    public CoffeeOrder getCoffeeOrderById(Long id) {
        return coffeeOrderDao.getByKey(id);
    }

    @Override
    public void addCoffeeOrder(CoffeeOrder coffeeOrder) {
        coffeeOrderDao.persist(coffeeOrder);
    }

    @Override
    public List<CoffeeOrder> getAllCoffeeOrder() {
        return coffeeOrderDao.getAll();
    }

    @Override
    public void deleteCoffeeOrderById(Long id) {
        coffeeOrderDao.deleteByKey(id);
    }

    @Override
    public void updateCoffeeOrder(CoffeeOrder coffeeOrder) {
        coffeeOrderDao.update(coffeeOrder);
    }
}
