package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.paymentRequest;
import com.app.service.StripeService;
@CrossOrigin
@RestController
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	StripeService service;

	@Value("${stripe.keys.public}")
	private String API_PUBLIC_KEY;

	@PostMapping
	public ResponseEntity<String> completePayment(@RequestBody paymentRequest pReq){
		return new ResponseEntity<>(service.createCharge(pReq.getEmail(), pReq.getToken(), pReq.getAmount()),HttpStatus.OK);
	}
}
