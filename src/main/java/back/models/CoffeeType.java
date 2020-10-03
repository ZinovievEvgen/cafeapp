package back.models;

import javax.persistence.*;

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
}
