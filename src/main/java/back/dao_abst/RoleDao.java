package back.dao_abst;

import back.models.Role;

import java.util.Optional;

/**
 * Created by SaidHazzarD on 20.08.2020.
 */
public interface RoleDao extends GenericDao<Long, Role> {
    Optional<Role> findByName(String name);
}
