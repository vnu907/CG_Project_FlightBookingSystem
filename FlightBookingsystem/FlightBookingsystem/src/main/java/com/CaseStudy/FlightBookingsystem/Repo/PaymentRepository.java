package com.CaseStudy.FlightBookingsystem.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CaseStudy.FlightBookingsystem.Entity.Payment;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Integer> {

	List<Payment> findAll();

	Payment save(Payment payment);

}
