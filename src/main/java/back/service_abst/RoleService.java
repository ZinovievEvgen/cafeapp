package back.service_abst;

import back.models.Role;

import java.util.List;
import java.util.Optional;

public interface RoleService {

    Role getRoleById(Long id);

    void addRole(Role role);

    List<Role> getAllRole();

    void deleteRoleById(Long id);

    void updateRole(Role role);

    Optional<Role> findByName(String name);

}
