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

    @Column(name = "nameOfOrder")
    private String nameOfOrder;

    @CreatedDate
    @Column(name = "dateOfCoffeeOrder")
    private Date dateOfCoffeeOrder;

    @Column(name = "deliveryAddressOfCoffeeOrder")
    private String deliveryAddressOfCoffeeOrder;

    @Column(name = "costOfCoffeeOrder")
    private double costOfCoffeeOrder;

    @Column(name = "statusOfReady")
    private boolean statusOfReady;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    @JsonBackReference
    private User userForOrder;

    @OneToMany(mappedBy = "coffeeOrderForItem", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<CoffeeOrderItem> coffeeOrderItemList;

    public CoffeeOrder() {
    }

    public long getIdOfCoffeeOrder() {
        return idOfCoffeeOrder;
    }

    public void setIdOfCoffeeOrder(long idOfCoffeeOrder) {
        this.idOfCoffeeOrder = idOfCoffeeOrder;
    }

    public List<CoffeeOrderItem> getCoffeeOrderItemList() {
        return coffeeOrderItemList;
    }

    public void setCoffeeOrderItemList(List<CoffeeOrderItem> coffeeOrderItemList) {
        this.coffeeOrderItemList = coffeeOrderItemList;
    }

    public User getUserForOrder() {
        return userForOrder;
    }

    public void setUserForOrder(User userForOrder) {
        this.userForOrder = userForOrder;
    }

    public boolean isStatusOfReady() {
        return statusOfReady;
    }

    public void setStatusOfReady(boolean statusOfReady) {
        this.statusOfReady = statusOfReady;
    }

    public double getCostOfCoffeeOrder() {
        return costOfCoffeeOrder;
    }

    public void setCostOfCoffeeOrder(double costOfCoffeeOrder) {
        this.costOfCoffeeOrder = costOfCoffeeOrder;
    }

    public String getDeliveryAddressOfCoffeeOrder() {
        return deliveryAddressOfCoffeeOrder;
    }

    public void setDeliveryAddressOfCoffeeOrder(String deliveryAddressOfCoffeeOrder) {
        this.deliveryAddressOfCoffeeOrder = deliveryAddressOfCoffeeOrder;
    }

    public Date getDateOfCoffeeOrder() {
        return dateOfCoffeeOrder;
    }

    public void setDateOfCoffeeOrder(Date dateOfCoffeeOrder) {
        this.dateOfCoffeeOrder = dateOfCoffeeOrder;
    }

    public String getNameOfOrder() {
        return nameOfOrder;
    }

    public void setNameOfOrder(String nameOfOrder) {
        this.nameOfOrder = nameOfOrder;
    }
}
