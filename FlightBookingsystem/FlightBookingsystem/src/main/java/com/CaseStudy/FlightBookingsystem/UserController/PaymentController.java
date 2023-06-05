package com.CaseStudy.FlightBookingsystem.UserController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import  com.CaseStudy.FlightBookingsystem.Entity.Payment;
import com.CaseStudy.FlightBookingsystem.Service.PaymentService;


import java.util.List;

@RestController
//@RequestMapping("/student")
@RequestMapping("/payment")
@CrossOrigin
public class PaymentController {
    @Autowired
//    private StudentService studentService;
    private PaymentService paymentService;

    @PostMapping("/add")
    public String add(@RequestBody Payment payment ){
        paymentService.savePayment(payment);
        return "Payment is added Successfully";
    }

    @GetMapping("/getAll")
    public List<Payment> list(){
        return paymentService.getAllPayments();
    }
}

