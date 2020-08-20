package back.dao_impl;

import back.dao_abst.UserDao;
import back.models.User;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

/**
 * Created by SaidHazzarD on 20.08.2020.
 */
@Transactional
@Repository
public class UserDaoImpl extends AbstractDao<Long, User> implements UserDao {
    @Override
    public Optional<User> findByUsername(String loginOfUser) {
        String query = "select c from User c where c.loginOfUser = :loginOfUser";
        return entityManager.unwrap(Session.class)
                .createQuery(query, User.class)
                .setParameter("loginOfUser",loginOfUser)
                .setFirstResult(0)
                .setMaxResults(1)
                .uniqueResultOptional();
    }

    @Override
    public Optional<User> findByEmail(String emailOfUser) {
        String query = "select c from User c where c.emailOfUser = :emailOfUser";
        return entityManager.unwrap(Session.class)
                .createQuery(query, User.class)
                .setParameter("emailOfUser",emailOfUser)
                .setFirstResult(0)
                .setMaxResults(1)
                .uniqueResultOptional();
    }
}
