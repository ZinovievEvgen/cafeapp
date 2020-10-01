package back.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

/**
 * CoffeeOrderItemDao (позиция заказа)
 */
@Entity
@Table(name = "coffeeOrderItem")
public class CoffeeOrderItem {
    @Id
    @GeneratedValue
    @Column(name = "idOfCoffeeOrderItem")
    private long idOfCoffeeOrderItem;

    /*@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "coffeeTypeId")
    @JsonBackReference
    private CoffeeType coffeeTypeByOrderItem;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "coffeeOrderId")
    @JsonBackReference
    private CoffeeOrder coffeeOrderByCoffeeOrderItem;*/

    @Column(name = "quantityOfCupCoffee")
    private long quantityOfCupCoffee;

    //приходит информация по заказу сколько и чего заказали, далее вызываем класс конфигурация и считаем стоимость заказа


    public CoffeeOrderItem() {
    }
}
