package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="patients")
@Getter
@Setter
@NoArgsConstructor
public class Patient extends UserEntity {

	@Column(length = 20)
	private String city;
	
	private int age;
	
	@Column(length = 10)
	private String bloodGroup;
	
//	@JsonIgnoreProperties("patient")
	@OneToMany(mappedBy = "patient",orphanRemoval = true)
	List<MedicinePrescription> mediPrescs=new ArrayList<MedicinePrescription>();
	
//	@JsonIgnoreProperties("patient")
	@OneToMany(mappedBy = "patient",orphanRemoval = true)
	List<TestPrescription> testPrescs=new ArrayList<TestPrescription>();
		
//	public Patient() {
//		// TODO Auto-generated constructor stub
//	}


	public Patient(String city, int age, String bloodGroup, List<MedicinePrescription> mediPrescs,
			List<TestPrescription> testPrescs) {
		super();
		this.city = city;
		this.age = age;
		this.bloodGroup = bloodGroup;
		this.mediPrescs = mediPrescs;
		this.testPrescs = testPrescs;
	}


	public Patient(String name, String email, String password, Gender gender) {
		super(name, email, password, gender);
		// TODO Auto-generated constructor stub
	}


//	public String getCity() {
//		return city;
//	}
//
//
//	public void setCity(String city) {
//		this.city = city;
//	}
//
//
//	public int getAge() {
//		return age;
//	}
//
//
//	public void setAge(int age) {
//		this.age = age;
//	}
//
//
//	public String getBloodGroup() {
//		return bloodGroup;
//	}
//
//
//	public void setBloodGroup(String bloodGroup) {
//		this.bloodGroup = bloodGroup;
//	}


	public List<MedicinePrescription> getMediPrescs() {
		return mediPrescs;
	}


	public void setMediPrescs(List<MedicinePrescription> mediPrescs) {
		this.mediPrescs = mediPrescs;
	}


	public List<TestPrescription> getTestPrescs() {
		return testPrescs;
	}


	public void setTestPrescs(List<TestPrescription> testPrescs) {
		this.testPrescs = testPrescs;
	}


	@Override
	public String toString() {
		return "Patient "+super.toString()+",city=" + city + ", age=" + age + ", bloodGroup=" + bloodGroup ;
	}
	
}
