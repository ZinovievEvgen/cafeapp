package back.utils;

import back.init.DefaultDataInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by SaidHazzarD on 30.08.2020.
 */
@Configuration
public class AppConfig {
    @Bean(initMethod = "init")
    public DefaultDataInitializer initTestData() {
        return new DefaultDataInitializer();
    }
}
