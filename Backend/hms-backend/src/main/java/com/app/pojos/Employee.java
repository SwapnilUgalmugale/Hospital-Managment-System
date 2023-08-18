package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "employees")
@Getter
@Setter
@NoArgsConstructor
public class Employee extends UserEntity {

	@Enumerated(EnumType.STRING)
	private Role role;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "dept_id")
	private Department department;

//	public Employee() {
//		// TODO Auto-generated constructor stub
//	}

	public Employee(String name, String email, String password, Gender gender, String contact, Role role, LocalDate dob,
			Department department) {
		super(name, email, password, gender, contact);
		this.role = role;
		this.dob = dob;
		this.department = department;
	}

//	public Role getRole() {
//		return role;
//	}
//
//	public void setRole(Role role) {
//		this.role = role;
//	}
//
//	public Department getDepartment() {
//		return department;
//	}
//
//	public void setDepartment(Department department) {
//		this.department = department;
//	}
//
//	public LocalDate getDob() {
//		return dob;
//	}
//
//	public void setDob(LocalDate dob) {
//		this.dob = dob;
//	}

	@Override
	public String toString() {
		return "Employee " + super.toString() + ", role=" + role + ", dob=" + dob + ", department=" + department;
	}

}
