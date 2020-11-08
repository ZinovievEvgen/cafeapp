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

    @OneToMany(mappedBy = "userForOrder", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<CoffeeOrder> orderList;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "userRoles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public User() {
    }

    public Long getIdOfUser() {
        return idOfUser;
    }

    public void setIdOfUser(Long idOfUser) {
        this.idOfUser = idOfUser;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public String getEmailOfUser() {
        return emailOfUser;
    }

    public void setEmailOfUser(String emailOfUser) {
        this.emailOfUser = emailOfUser;
    }

    public String getPassOfUser() {
        return passOfUser;
    }

    public void setPassOfUser(String passOfUser) {
        this.passOfUser = passOfUser;
    }

    public String getLoginOfUser() {
        return loginOfUser;
    }

    public void setLoginOfUser(String loginOfUser) {
        this.loginOfUser = loginOfUser;
    }

    public String getNameOfUser() {
        return nameOfUser;
    }

    public void setNameOfUser(String nameOfUser) {
        this.nameOfUser = nameOfUser;
    }

    public String getSurnameOfUser() {
        return surnameOfUser;
    }

    public void setSurnameOfUser(String surnameOfUser) {
        this.surnameOfUser = surnameOfUser;
    }

    public List<CoffeeOrder> getOrderList() {
        return orderList;
    }

    public void setOrderList(List<CoffeeOrder> orderList) {
        this.orderList = orderList;
    }
}