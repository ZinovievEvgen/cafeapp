package back.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * CoffeeOrder (заказ на кофе)
 */
@Entity
@Table(name = "coffeeOrder")
public class CoffeeOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idOfCoffeeOrder")
    private long idOfCoffeeOrder;

    @CreatedDate
    @Column(name = "dateOfCoffeeOrder")
    private Date dateOfCoffeeOrder;

    @Column(name = "deliveryAddressOfCoffeeOrder")
    private String deliveryAddressOfCoffeeOrder;

    @Column(name = "costOfCoffeeOrder")
    private double costOfCoffeeOrder;

    public CoffeeOrder() {
    }
}
