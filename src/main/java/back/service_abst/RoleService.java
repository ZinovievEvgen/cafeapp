package back.service_abst;

import back.models.Role;

import java.util.List;

/**
 * Created by SaidHazzarD on 20.08.2020.
 */
public interface RoleService {

    Role getRoleById(Long id);

    void addRole(Role role);

    List<Role> getAllRole();

    void deleteRoleById(Long id);

    void updateRole(Role role);

}
