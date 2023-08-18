package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.Employee;
import com.app.pojos.Patient;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class BookAppointment {

	private LocalDate apptDate;
	
	@JsonIgnoreProperties({"city","age","bloodGroup","mediPrescs","testPrescs","name","email","password","gender","contact"})
//	@JsonIgnoreProperties({"mediPrescs","testPrescs","password"})
	private Patient apptPatient;
	@JsonIgnoreProperties({"name","email","password","gender","contact","role","dob","department"})
	private Employee apptDoctor;
	
	public BookAppointment() {
		// TODO Auto-generated constructor stub
	}

	public LocalDate getApptDate() {
		return apptDate;
	}

	public void setApptDate(LocalDate apptDate) {
		this.apptDate = apptDate;
	}

	public Patient getApptPatient() {
		return apptPatient;
	}

	public void setApptPatient(Patient apptPatient) {
		this.apptPatient = apptPatient;
	}

	public Employee getApptDoctor() {
		return apptDoctor;
	}

	public void setApptDoctor(Employee apptDoctor) {
		this.apptDoctor = apptDoctor;
	}


	@Override
	public String toString() {
		return "bookAppointment [apptDate=" + apptDate + ", apptPatient=" + apptPatient + ", apptDoctor=" + apptDoctor
				+ "]";
	}
	
}
