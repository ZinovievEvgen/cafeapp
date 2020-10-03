package back.controllers;

import back.models.Role;
import back.models.User;
import back.service_abst.RoleService;
import back.service_abst.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @GetMapping("/get/{id}")
    public User getUserById(@PathVariable long id) {
        return userService.getUserById(id);
    }

    @GetMapping("/allUsers")
    public List<User> getAllUsers() {
        return userService.getAllUser();
    }

    @PostMapping("/create")
    public void createUser(@RequestBody User user) {
        Set<Role> userRoles = new HashSet<>();
        Role userRole = roleService.findByName("USER").
                orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        userRoles.add(userRole);
        user.setRoles(userRoles);
        userService.addUser(user);
    }

    @PutMapping("/update/{id}")
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable long id) {
        userService.deleteUserById(id);
    }
}
