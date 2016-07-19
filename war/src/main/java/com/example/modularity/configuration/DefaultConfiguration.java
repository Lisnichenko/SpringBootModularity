package com.example.modularity.configuration;

import com.example.modularity.controller.ItemController;
import com.example.modularity.controller.MainController;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by Kmarkovych on 08-Jul-16.
 */
@Configuration
public class DefaultConfiguration {

    @Bean
    public MainController getMainController() {
        return new MainController();
    }

    @Bean
    public ItemController getItemController() {
        return new ItemController();
    }
}
