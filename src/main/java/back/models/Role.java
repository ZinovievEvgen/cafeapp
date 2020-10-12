package back.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

/**
 * Role of user
 */
@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idOfRole")
    private Long idOfRole;

    @Column(name = "nameOfRole")
    private String nameOfRole;

    @ManyToMany(fetch = FetchType.LAZY, targetEntity = User.class)
    @JoinTable(name = "userRoles",
            joinColumns = {@JoinColumn(name = "role_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")})
    @JsonBackReference
    private List<User> users;

    public Role() {
    }

    public Long getId() {
        return idOfRole;
    }

    public void setId(Long idOfRole) {
        this.idOfRole = idOfRole;
    }

    public String getName() {
        return nameOfRole;
    }

    public void setName(String nameOfRole) {
        this.nameOfRole = nameOfRole;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
