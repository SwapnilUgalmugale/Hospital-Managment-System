package com.app.dto;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.pojos.Employee;
import com.app.pojos.MedicalTest;
import com.app.pojos.Patient;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class TestPrescriptionDtoByDr {
	private Integer id;
	@JsonIgnoreProperties("testPresc")
	
	Set<MedicalTest> tests= new HashSet<MedicalTest>();
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate prescDate;

	
	
	@JsonIgnoreProperties({"city","age","bloodGroup","mediPrescs","testPrescs","email","password","gender","contact"})
	private Patient patient;
	
	@JsonIgnoreProperties({"email","password","gender","contact","role","dob","department"})
	private Employee doctor;
	
	public TestPrescriptionDtoByDr()
	{
		System.out.println("in test presc dto ctor");
	}
	
	
	
	public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}


	public Set<MedicalTest> getTests() {
		return tests;
	}



	public void setTests(Set<MedicalTest> tests) {
		this.tests = tests;
	}



	public LocalDate getPrescDate() {
		return prescDate;
	}

	public void setPrescDate(LocalDate prescDate) {
		this.prescDate = prescDate;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Employee getDoctor() {
		return doctor;
	}

	public void setDoctor(Employee doctor) {
		this.doctor = doctor;
	}

	@Override
	public String toString() {
		return "TestPrescriptionDtoByDr [tests=" + tests + ", prescDate=" + prescDate + ", patient=" + patient
				+ ", doctor=" + doctor + "]";
	}
	
}
