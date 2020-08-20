package back.service_abst;

import back.models.User;

import java.util.List;
import java.util.Optional;

/**
 * Created by SaidHazzarD on 20.08.2020.
 */
public interface UserService {

    User getUserById(Long id);

    Optional<User> findByLogin(String login);

    Optional<User> findByEmail(String email);

    void addUser(User user);

    List<User> getAllUser();

    void deleteUserById(Long id);

    void updateUser(User user);

    String getCurrentUsername();
}
