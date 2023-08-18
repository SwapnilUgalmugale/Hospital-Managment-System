package com.app.dto;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.pojos.MedicalTest;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class TestPrescriptiondto {

	 @JsonIgnoreProperties({"charges","testPresc"}) 
	Set<MedicalTest> tests = new HashSet<>();

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate prescDate;

	private String patient;
	
	private String doctor;

	public TestPrescriptiondto() {
		// TODO Auto-generated constructor stub
	}

	public TestPrescriptiondto(Set<MedicalTest> tests, LocalDate prescDate, String patient, String doctor) {
		super();
		this.tests = tests;
		this.prescDate = prescDate;
		this.patient = patient;
		this.doctor = doctor;
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

	public String getPatient() {
		return patient;
	}

	public void setPatient(String patient) {
		this.patient = patient;
	}

	public String getDoctor() {
		return doctor;
	}

	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}

	@Override
	public String toString() {
		return "TestPrescriptiondto [tests=" + tests + ", prescDate=" + prescDate + ", patient=" + patient + ", doctor="
				+ doctor + "]";
	}
	
}
