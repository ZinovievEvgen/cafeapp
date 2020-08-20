package back.dao_impl;

import back.dao_abst.CoffeeOrderItemDao;
import back.models.CoffeeOrderItem;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

/**
 * Created by SaidHazzarD on 20.08.2020.
 */
@Transactional
@Repository
public class CoffeeOrderItemDaoImpl extends AbstractDao<Long, CoffeeOrderItem> implements CoffeeOrderItemDao {
}
