package com.app.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.stripe.Stripe;
import com.stripe.model.Charge;
import com.stripe.model.Coupon;

@Service
public class StripeService {

	@Value("${stripe.keys.secret}")
	private String API_SECRET_KEY;

	public StripeService() {
	}

	public Coupon retrieveCoupon(String code) {
		try {
			Stripe.apiKey = API_SECRET_KEY;
			return Coupon.retrieve(code);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}

	public String createCharge(String email, String token, double amount) {
		String id = null;
		try {
			Stripe.apiKey = API_SECRET_KEY;
			Map<String, Object> chargeParams = new HashMap<>();
			chargeParams.put("amount",(int) amount*100);
			chargeParams.put("currency", "INR");
			chargeParams.put("description", "Charge for " + email);
			chargeParams.put("source", token); // ^ obtained with Stripe.js

			// create a charge
			Charge charge = Charge.create(chargeParams);
			id = charge.getId();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return id;
	}
}
