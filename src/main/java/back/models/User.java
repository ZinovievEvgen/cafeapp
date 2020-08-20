package back.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Users
 */
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idOfUser")
    private Long idOfUser;

    @Column(name = "surnameOfUser")
    private String surnameOfUser;

    @Column(name = "nameOfUser")
    private String nameOfUser;

    @Column(name = "loginOfUser")
    private String loginOfUser;

    @Column(name = "passOfUser")
    private String passOfUser;

    @Email
    @Column(name = "emailOfUser")
    private String emailOfUser;

    @OneToMany(mappedBy = "userOfCoffeeOrder", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<CoffeeOrder> coffeeOrdersOfUser;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "userRoles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public User() {
    }
}
