package com.luv2code.spring_boot_library.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.luv2code.spring_boot_library.entity.Book;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
    private String allowedOrigin = "http://localhost:3000"; // client port

    // CorsRegistry -> คลาสที่ใช้จัดการกับการตั้งค่า CORS
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        // store un support http method for specific url
        HttpMethod[] unSupportedActions = { HttpMethod.POST, HttpMethod.PATCH, HttpMethod.DELETE, HttpMethod.PUT };

        // สั่งให้ spring data rest ทำการ response id ของข้อมูลออกไปด้วย
        // ค่าเริ่มต้นจะไม่แสดงผล id ออกไป
        config.exposeIdsFor(Book.class);
        disableHttpMethods(Book.class, config, unSupportedActions);

        // Configuration CORS mapping
        cors.addMapping(config.getBasePath() + "/**").allowedOrigins(allowedOrigin);
    }

    private void disableHttpMethods(@SuppressWarnings("rawtypes") Class theClass, RepositoryRestConfiguration config, HttpMethod[] theUnSupportMethods) {
        config
            .getExposureConfiguration()
            .forDomainType(theClass)
            .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnSupportMethods))
            .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnSupportMethods));
    }
}
