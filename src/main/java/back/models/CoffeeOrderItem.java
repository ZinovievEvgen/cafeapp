package back.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;


/**
 * CoffeeOrderItemDao (позиция заказа)
 * --------приходит информация по заказу сколько и чего заказали, далее вызываем класс конфигурация и считаем стоимость заказа
 */
@Entity
@Table(name = "coffeeOrderItem")
public class CoffeeOrderItem {
    @Id
    @GeneratedValue
    @Column(name = "idOfCoffeeOrderItem")
    private long idOfCoffeeOrderItem;

    @Column(name = "quantityOfCupCoffee")
    private long quantityOfCupCoffee;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "idOfCoffeeOrder")
    @JsonBackReference
    private CoffeeOrder coffeeOrderForItem;

    @OneToOne(mappedBy = "coffeeOrderItemForCoffeeType")
    private CoffeeType coffeeType;

    public CoffeeOrderItem() {
    }

    public long getIdOfCoffeeOrderItem() {
        return idOfCoffeeOrderItem;
    }

    public void setIdOfCoffeeOrderItem(long idOfCoffeeOrderItem) {
        this.idOfCoffeeOrderItem = idOfCoffeeOrderItem;
    }

    public CoffeeType getCoffeeType() {
        return coffeeType;
    }

    public void setCoffeeType(CoffeeType coffeeType) {
        this.coffeeType = coffeeType;
    }

    public CoffeeOrder getCoffeeOrderForItem() {
        return coffeeOrderForItem;
    }

    public void setCoffeeOrderForItem(CoffeeOrder coffeeOrderForItem) {
        this.coffeeOrderForItem = coffeeOrderForItem;
    }

    public long getQuantityOfCupCoffee() {
        return quantityOfCupCoffee;
    }

    public void setQuantityOfCupCoffee(long quantityOfCupCoffee) {
        this.quantityOfCupCoffee = quantityOfCupCoffee;
    }
}
