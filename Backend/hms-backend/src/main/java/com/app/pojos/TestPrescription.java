package com.app.pojos;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "test_presc")
@Getter
@Setter
@NoArgsConstructor
public class TestPrescription extends BaseEntity {

	@ManyToMany
	@JoinTable(name = "tests_and_presc",joinColumns=@JoinColumn(name="presc_id"),inverseJoinColumns=@JoinColumn(name="test_id"))
	Set<MedicalTest> tests= new HashSet<MedicalTest>();
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate prescDate;

	@JsonIgnoreProperties("testPrescs")
	@ManyToOne
	@JoinColumn(name="patient_id")
	private Patient patient;
	
	@OneToOne
	private Employee doctor;
	
//	public TestPrescription() {
//		// TODO Auto-generated constructor stub
//	}
	

	public TestPrescription(Set<MedicalTest> tests, LocalDate prescDate) {
		super();
		this.tests = tests;
		this.prescDate = prescDate;
	}


	public Set<MedicalTest> getTests() {
		return tests;
	}


	public void setTests(Set<MedicalTest> tests) {
		this.tests = tests;
	}


//	public LocalDate getPrescDate() {
//		return prescDate;
//	}
//
//	public void setPrescDate(LocalDate prescDate) {
//		this.prescDate = prescDate;
//	}
//
//	public Patient getPatient() {
//		return patient;
//	}
//
//	public void setPatient(Patient patient) {
//		this.patient = patient;
//	}
//
//	public Employee getDoctor() {
//		return doctor;
//	}
//
//	public void setDoctor(Employee doctor) {
//		this.doctor = doctor;
//	}


	@Override
	public String toString() {
		return "TestPrescription id="+getId()+", prescDate=" + prescDate;
	}
	
}
