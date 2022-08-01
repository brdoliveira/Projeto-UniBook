package br.com.sptech.apiprojetounibookjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableFeignClients
@SpringBootApplication
public class UnibookJpaApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(UnibookJpaApplication.class, args);
	}

}
