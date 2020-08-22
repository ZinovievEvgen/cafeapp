package back.service_impl;

import back.dao_abst.UserDao;
import back.models.User;
import back.service_abst.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

/**
 * Created by SaidHazzarD on 23.08.2020.
 */
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User getUserById(Long id) {
        return userDao.getByKey(id);
    }

    @Override
    public Optional<User> findByLogin(String login) {
        return userDao.findByUsername(login);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userDao.findByEmail(email);
    }

    @Override
    public void addUser(User user) {
        userDao.persist(user);
    }

    @Override
    public List<User> getAllUser() {
        return userDao.getAll();
    }

    @Override
    public void deleteUserById(Long id) {
        userDao.deleteByKey(id);
    }

    @Override
    public void updateUser(User user) {
        userDao.update(user);
    }

    @Override
    public String getCurrentUsername() {
        /**
         * Authentication auth = SecurityContextHolder.getContext().getAuthentication();
         return auth.getName();
         */
        return null;
    }
}
