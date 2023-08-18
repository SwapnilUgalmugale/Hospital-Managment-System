package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "medical_tests")
@Getter
@Setter
@NoArgsConstructor
public class MedicalTest extends BaseEntity {

	@Column(length = 20)
	private String name;
	
	private double charges;
	

	
//	public MedicalTest() {
//		// TODO Auto-generated constructor stub
//	}
	public MedicalTest(String name, double charges) {
		super();
		this.name = name;
		this.charges = charges;
	}
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public double getCharges() {
//		return charges;
//	}
//	public void setCharges(double charges) {
//		this.charges = charges;
//	}
	

	@Override
	public String toString() {
		return "MedicalTest id="+getId()+", name=" + name + ", charges=" + charges ;
	}
	
}
