package back.service_impl;

import back.dao_abst.RoleDao;
import back.models.Role;
import back.service_abst.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleDao roleDao;

    @Override
    public Role getRoleById(Long id) {
        return roleDao.getByKey(id);
    }

    @Override
    public void addRole(Role role) {
        roleDao.persist(role);
    }

    @Override
    public List<Role> getAllRole() {
        return roleDao.getAll();
    }

    @Override
    public void deleteRoleById(Long id) {
        roleDao.deleteByKey(id);
    }

    @Override
    public void updateRole(Role role) {
        roleDao.update(role);
    }

    @Override
    public Optional<Role> findByName(String name) {
        return roleDao.findByName(name);
    }
}
