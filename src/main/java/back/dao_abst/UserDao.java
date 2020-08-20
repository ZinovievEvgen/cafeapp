package back.dao_abst;

import back.models.User;

import java.util.Optional;

/**
 * Created by SaidHazzarD on 20.08.2020.
 */
public interface UserDao extends GenericDao<Long, User> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
}
