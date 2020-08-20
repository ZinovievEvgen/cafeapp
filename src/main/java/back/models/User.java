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

    public List<CoffeeOrder> getCoffeeOrdersOfUser() {
        return coffeeOrdersOfUser;
    }

    public void setCoffeeOrdersOfUser(List<CoffeeOrder> coffeeOrdersOfUser) {
        this.coffeeOrdersOfUser = coffeeOrdersOfUser;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (idOfUser != null ? !idOfUser.equals(user.idOfUser) : user.idOfUser != null) return false;
        if (surnameOfUser != null ? !surnameOfUser.equals(user.surnameOfUser) : user.surnameOfUser != null)
            return false;
        if (nameOfUser != null ? !nameOfUser.equals(user.nameOfUser) : user.nameOfUser != null) return false;
        if (loginOfUser != null ? !loginOfUser.equals(user.loginOfUser) : user.loginOfUser != null) return false;
        if (passOfUser != null ? !passOfUser.equals(user.passOfUser) : user.passOfUser != null) return false;
        if (emailOfUser != null ? !emailOfUser.equals(user.emailOfUser) : user.emailOfUser != null) return false;
        if (coffeeOrdersOfUser != null ? !coffeeOrdersOfUser.equals(user.coffeeOrdersOfUser) : user.coffeeOrdersOfUser != null)
            return false;
        return roles != null ? roles.equals(user.roles) : user.roles == null;

    }

    @Override
    public int hashCode() {
        int result = idOfUser != null ? idOfUser.hashCode() : 0;
        result = 31 * result + (surnameOfUser != null ? surnameOfUser.hashCode() : 0);
        result = 31 * result + (nameOfUser != null ? nameOfUser.hashCode() : 0);
        result = 31 * result + (loginOfUser != null ? loginOfUser.hashCode() : 0);
        result = 31 * result + (passOfUser != null ? passOfUser.hashCode() : 0);
        result = 31 * result + (emailOfUser != null ? emailOfUser.hashCode() : 0);
        result = 31 * result + (coffeeOrdersOfUser != null ? coffeeOrdersOfUser.hashCode() : 0);
        result = 31 * result + (roles != null ? roles.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "User{" +
                "loginOfUser='" + loginOfUser + '\'' +
                ", passOfUser='" + passOfUser + '\'' +
                ", emailOfUser='" + emailOfUser + '\'' +
                '}';
    }
}
