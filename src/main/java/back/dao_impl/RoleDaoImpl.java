package back.dao_impl;

import back.dao_abst.RoleDao;
import back.models.Role;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Repository
public class RoleDaoImpl extends AbstractDao<Long, Role> implements RoleDao {
    @Override
    public Optional<Role> findByName(String name) {
        String query = "select c from Role c where c.nameOfRole = :name";
        return entityManager.unwrap(Session.class)
                .createQuery(query, Role.class)
                .setParameter("name", name)
                .setFirstResult(0)
                .setMaxResults(1)
                .uniqueResultOptional();
    }
}
