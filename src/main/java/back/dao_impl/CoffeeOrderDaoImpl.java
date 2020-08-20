package back.dao_impl;

import back.dao_abst.CoffeeOrderDao;
import back.models.CoffeeOrder;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

/**
 * Created by SaidHazzarD on 20.08.2020.
 */
@Transactional
@Repository
public class CoffeeOrderDaoImpl extends AbstractDao<Long, CoffeeOrder> implements CoffeeOrderDao {
}
