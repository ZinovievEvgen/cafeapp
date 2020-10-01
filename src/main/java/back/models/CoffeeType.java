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


    @OneToMany(mappedBy = "coffeeTypeByOrderItem", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
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

    public List<CoffeeOrderItem> getCoffeeOrderItemByCoffeeType() {
        return coffeeOrderItemByCoffeeType;
    }

    public void setCoffeeOrderItemByCoffeeType(List<CoffeeOrderItem> coffeeOrderItemByCoffeeType) {
        this.coffeeOrderItemByCoffeeType = coffeeOrderItemByCoffeeType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CoffeeType that = (CoffeeType) o;

        if (idOfCoffeeType != that.idOfCoffeeType) return false;
        if (Double.compare(that.priceOfCoffeeType, priceOfCoffeeType) != 0) return false;
        if (nameOfCoffeeType != null ? !nameOfCoffeeType.equals(that.nameOfCoffeeType) : that.nameOfCoffeeType != null)
            return false;
        return coffeeOrderItemByCoffeeType != null ? coffeeOrderItemByCoffeeType.equals(that.coffeeOrderItemByCoffeeType) : that.coffeeOrderItemByCoffeeType == null;

    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = (int) (idOfCoffeeType ^ (idOfCoffeeType >>> 32));
        result = 31 * result + (nameOfCoffeeType != null ? nameOfCoffeeType.hashCode() : 0);
        temp = Double.doubleToLongBits(priceOfCoffeeType);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (coffeeOrderItemByCoffeeType != null ? coffeeOrderItemByCoffeeType.hashCode() : 0);
        return result;
    }
}
