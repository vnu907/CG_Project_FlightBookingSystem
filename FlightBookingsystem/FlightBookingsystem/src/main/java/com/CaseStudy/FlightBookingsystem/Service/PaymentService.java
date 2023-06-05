package com.CaseStudy.FlightBookingsystem.Service;

import java.util.List;

import com.CaseStudy.FlightBookingsystem.Entity.Payment;

public interface PaymentService {
    public Payment savePayment(Payment payment);
    public List<Payment> getAllPayments();
}