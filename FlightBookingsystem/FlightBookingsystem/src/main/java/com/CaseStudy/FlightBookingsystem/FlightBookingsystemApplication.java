package com.CaseStudy.FlightBookingsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = SecurityAutoConfiguration.class )
public class FlightBookingsystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightBookingsystemApplication.class, args);
	}

}
