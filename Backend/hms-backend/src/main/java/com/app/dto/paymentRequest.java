package com.app.dto;

public class paymentRequest {

	private String email;
	private String token;
	private double amount;
	
	public paymentRequest() {
		// TODO Auto-generated constructor stub
	}

	public paymentRequest(String email, String token, double amount) {
		super();
		this.email = email;
		this.token = token;
		this.amount = amount;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "paymentRequest [email=" + email + ", token=" + token + ", amount=" + amount + "]";
	}
	
}
