package back.dao_impl;

import back.dao_abst.ConfigurationDao;
import back.models.Configuration;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

/**
 * Created by SaidHazzarD on 20.08.2020.
 */
@Transactional
@Repository
public class ConfigurationDaoImpl extends AbstractDao<Long, Configuration> implements ConfigurationDao {
}
