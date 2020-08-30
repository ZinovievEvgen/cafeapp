package back.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * CoffeeType (сорт кофе: 'эспрессо, датте, капучино и т.д.)
 */
@Entity
@Table(name = "coffeeType")
public class CoffeeType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idOfCoffeeType")
    private long idOfCoffeeType;

    @Column(name = "nameOfCoffeeType")
    private String nameOfCoffeeType;

    @Column(name = "priceOfCoffeeType")
    private double priceOfCoffeeType;

    @Column(name = "enabledCoffeeType")
    private boolean enabledCoffeeType;

    @OneToMany(mappedBy = "coffeeTypeByOrderItem", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<CoffeeOrderItem> coffeeOrderItemByCoffeeType;

    public CoffeeType() {
    }

    public String getNameOfCoffeeType() {
        return nameOfCoffeeType;
    }

    public void setNameOfCoffeeType(String nameOfCoffeeType) {
        this.nameOfCoffeeType = nameOfCoffeeType;
    }

    public long getIdOfCoffeeType() {
        return idOfCoffeeType;
    }

    public void setIdOfCoffeeType(long idOfCoffeeType) {
        this.idOfCoffeeType = idOfCoffeeType;
    }

    public double getPriceOfCoffeeType() {
        return priceOfCoffeeType;
    }

    public void setPriceOfCoffeeType(double priceOfCoffeeType) {
        this.priceOfCoffeeType = priceOfCoffeeType;
    }

    public boolean isEnabledCoffeeType() {
        return enabledCoffeeType;
    }

    public void setEnabledCoffeeType(boolean enabledCoffeeType) {
        this.enabledCoffeeType = enabledCoffeeType;
    }

    public List<CoffeeOrderItem> getCoffeeOrderItemByCoffeeType() {
        return coffeeOrderItemByCoffeeType;
    }

    public void setCoffeeOrderItemByCoffeeType(List<CoffeeOrderItem> coffeeOrderItemByCoffeeType) {
        this.coffeeOrderItemByCoffeeType = coffeeOrderItemByCoffeeType;
    }
}
