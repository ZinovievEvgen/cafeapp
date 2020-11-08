package back.init;

import back.models.*;
import back.service_abst.*;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by SaidHazzarD on 30.08.2020.
 */
public class DefaultDataInitializer {


    @Autowired
    private CoffeeTypeService coffeeTypeService;
    @Autowired
    private RoleService roleService;
    @Autowired
    private UserService userService;
    @Autowired
    private CoffeeOrderService coffeeOrderService;
    @Autowired
    private CoffeeOrderItemService coffeeOrderItemService;

    private void init() throws Exception {
        CoffeeType latte = new CoffeeType();
        latte.setNameOfCoffeeType("Latte");
        latte.setPriceOfCoffeeType(100);
        coffeeTypeService.addCoffeeType(latte);

        Role roleAdmin = new Role();
        roleAdmin.setName("ADMIN");
        roleService.addRole(roleAdmin);

        Role roleUser = new Role();
        roleUser.setName("USER");
        roleService.addRole(roleUser);

        CoffeeOrder coffeeOrder1 = new CoffeeOrder();
        coffeeOrder1.setNameOfOrder("заказ1");
        coffeeOrderService.addCoffeeOrder(coffeeOrder1);

        /*User admin = new User();
        admin.setLogin("admin");
        admin.setPassword("admin");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(roleAdmin);
        adminRoles.add(roleUser);
        admin.setRoles(adminRoles);

        userService.addUser(admin);

        User user = new User();
        user.setLogin("user");
        user.setPassword("user");
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(roleUser);
        user.setRoles(userRoles);

        userService.addUser(user);*/


    }
}
