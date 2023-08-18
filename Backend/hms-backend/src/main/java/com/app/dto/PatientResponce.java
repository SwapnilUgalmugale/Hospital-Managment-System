package com.app.dto;

import javax.persistence.Column;

import com.app.pojos.Gender;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class PatientResponce {
	private Integer id;
	
	private String name;
	
	private String email;
	
	@JsonIgnore
	@Column(length = 20,nullable = false)
	private String password;
	
	private Gender gender;
	
	private String contact;
	
	private String city;
	
	private int age;
	
	private String bloodGroup;

	public PatientResponce() {
		// TODO Auto-generated constructor stub
	}
	public PatientResponce(Integer id, String name, String email, String password, Gender gender, String contact, String city,
			int age, String bloodGroup) {
		super();
		this.id=id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.contact = contact;
		this.city = city;
		this.age = age;
		this.bloodGroup = bloodGroup;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Gender getGender() {
		return gender;
	}
	public void setGender(Gender gender) {
		this.gender = gender;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getBloodGroup() {
		return bloodGroup;
	}
	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}
	@Override
	public String toString() {
		return "PatientResponce [name=" + name + ", email=" + email + ", password=" + password + ", gender=" + gender
				+ ", contact=" + contact + ", city=" + city + ", age=" + age + ", bloodGroup=" + bloodGroup + "]";
	}
	
}
