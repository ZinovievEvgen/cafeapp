package back.dao_impl;

import back.dao_abst.RoleDao;
import back.models.Role;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

/**
 * Created by SaidHazzarD on 20.08.2020.
 */
@Transactional
@Repository
public class RoleDaoImpl extends AbstractDao<Long, Role> implements RoleDao {
}
