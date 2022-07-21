package br.com.sptech.apiprojetounibookjava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class UnibookJpaApplication {

	public static void main(String[] args) {
		SpringApplication.run(UnibookJpaApplication.class, args);
	}

}
