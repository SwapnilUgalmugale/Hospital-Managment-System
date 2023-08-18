package com.app.dto;

import com.app.pojos.Gender;

public class PatientRegister {

	private String name;
	
	private String email;
	
	private Gender gender;
	private String password;
	
	public PatientRegister() {
		// TODO Auto-generated constructor stub
	}

	public PatientRegister(String name, String email, Gender gender, String password) {
		super();
		this.name = name;
		this.email = email;
		this.gender = gender;
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "PatientRegister [name=" + name + ", email=" + email + ", gender=" + gender + ", password=" + password
				+ "]";
	}

	
}
