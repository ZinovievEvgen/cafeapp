package back.service_impl;

import back.dao_abst.RoleDao;
import back.models.Role;
import back.service_abst.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.websocket.server.ServerEndpoint;
import java.util.List;

/**
 * Created by SaidHazzarD on 23.08.2020.
 */
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
}
