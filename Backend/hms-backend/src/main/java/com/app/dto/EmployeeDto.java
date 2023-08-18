package com.app.dto;

import java.time.LocalDate;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.pojos.Gender;
import com.app.pojos.Role;

public class EmployeeDto {
	private int id;
	private String name;
	private String email;
	private String password;
	@Enumerated(EnumType.STRING)
	private Gender gender;
	private String contact;
	@Enumerated(EnumType.STRING)
	private Role role;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private LocalDate dob;
	private int department;

	public EmployeeDto() {
		// TODO Auto-generated constructor stub
	}


	public EmployeeDto(String name, String email, String password, Gender gender, String contact, Role role,
			LocalDate dob, int department) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.contact = contact;
		this.role = role;
		this.dob = dob;
		this.department = department;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
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

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}


	public int getDepartment() {
		return department;
	}


	public void setDepartment(int department) {
		this.department = department;
	}


	@Override
	public String toString() {
		return "EmployeeDto [id=" + id + ", name=" + name + ", email=" + email + ", gender=" + gender + ", contact="
				+ contact + ", role=" + role + ", dob=" + dob + ", department=" + department + "]";
	}
	
}
