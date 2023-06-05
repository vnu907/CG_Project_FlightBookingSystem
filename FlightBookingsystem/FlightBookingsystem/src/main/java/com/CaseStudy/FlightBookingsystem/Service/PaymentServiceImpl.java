package com.CaseStudy.FlightBookingsystem.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CaseStudy.FlightBookingsystem.Entity.Payment;
import com.CaseStudy.FlightBookingsystem.Repo.PaymentRepository;
import com.CaseStudy.FlightBookingsystem.Service.PaymentService;

import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

//    @Override
    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }

//    @Override
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }
}

