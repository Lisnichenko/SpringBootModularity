package com.example.modularity.configuration;

import com.example.modularity.api.service.ItemService;
import com.example.modularity.api.service.OrderService;
import com.example.modularity.controller.ItemController;
import com.example.modularity.controller.MainController;
import com.example.modularity.controller.OrderController;
import com.example.modularity.service.MockItemService;
import com.example.modularity.service.MockOrderService;
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
    public OrderController getOrderController() {
        return new OrderController();
    }

    @Bean
    public ItemController getItemController(){return new ItemController();}

    @Bean
    public OrderService getOrderService(){
        return new MockOrderService();
    }

    @Bean
    public ItemService getItemService(){
        return new MockItemService();
    }
}
