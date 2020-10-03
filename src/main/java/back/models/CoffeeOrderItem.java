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

    @Column(name = "quantityOfCupCoffee")
    private long quantityOfCupCoffee;

    //приходит информация по заказу сколько и чего заказали, далее вызываем класс конфигурация и считаем стоимость заказа


    public CoffeeOrderItem() {
    }
}
