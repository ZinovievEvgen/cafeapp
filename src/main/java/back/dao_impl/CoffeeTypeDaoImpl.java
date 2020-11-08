package back.dao_impl;

import back.dao_abst.CoffeeTypeDao;
import back.models.CoffeeType;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


/**
 * Created by SaidHazzarD on 20.08.2020.
 */
@Transactional
@Repository
public class CoffeeTypeDaoImpl extends AbstractDao<Long, CoffeeType> implements CoffeeTypeDao {
}
