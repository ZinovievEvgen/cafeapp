package back.controllers;

import back.models.Role;
import back.service_abst.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/roles")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @GetMapping("/get/{id}")
    public Role getRoleById(@PathVariable long id) {
        return roleService.getRoleById(id);
    }

    @GetMapping("/allRoles")
    public List<Role> getAllRoles() {
        return roleService.getAllRole();
    }

    @PostMapping("/create")
    public void createRole(@RequestBody Role role) {
        roleService.addRole(role);
    }

    @PutMapping("/update/{id}")
    public void updateRole(@RequestBody Role role) {
        roleService.updateRole(role);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteRole(@PathVariable long id) {
        roleService.deleteRoleById(id);
    }
}
