package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.MappedSuperclass;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@MappedSuperclass
@Getter
@Setter
@NoArgsConstructor
public class UserEntity extends BaseEntity{
	
	@Column(length = 20)
	private String name;
	
	@Column(length = 20,unique = true)
	private String email;
	
	@Column(length = 20,nullable = false)
	private String password;
	
	@Enumerated(EnumType.STRING)
	private Gender gender;
	
	@Column(length = 20)
	private String contact;

//	public UserEntity() {
//		// TODO Auto-generated constructor stub
//	}
	
	public UserEntity(String name, String email, String password, Gender gender, String contact) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.contact = contact;
	}

	public UserEntity(String name, String email, String password, Gender gender) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.gender = gender;
	}

//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public Gender getGender() {
//		return gender;
//	}
//
//	public void setGender(Gender gender) {
//		this.gender = gender;
//	}
//
//	public String getContact() {
//		return contact;
//	}
//
//	public void setContact(String contact) {
//		this.contact = contact;
//	}

	@Override
	public String toString() {
		return " id="+getId()+", name=" + name + ", email=" + email + ", password=" + password + ", gender=" + gender
				+ ", contact=" + contact ;
	}
	
	
}
