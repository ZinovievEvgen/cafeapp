package back.models;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

/**
 * Configuration (конфигурация алгоритма расчета стоимости заказа и доставки)
 */
@Entity
@Table(name = "configuration")
public class Configuration {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idOfConfiguration")
    private long idOfConfiguration;

    @CreatedDate
    @Column(name = "dateOfNewConfiguration")
    private Date dateOfNewConfiguration;

    @Column(name = "costOfDelivery")
    private long costOfDelivery;

    @Column(name = "totalSumForFreeDelivery")
    private long totalSumForFreeDelivery; // если заказ выше этой суммы доставка бесплатная

    @Column(name = "numberOfFreeCupCoffee")
    private long numberOfFreeCupCoffee; // какая чашка бесплатно идет

    //метод расчета стоимости заказа

    private long paymentCostOfOrder() {
        return 0;
    }

    public Configuration() {
    }
}
