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
}
