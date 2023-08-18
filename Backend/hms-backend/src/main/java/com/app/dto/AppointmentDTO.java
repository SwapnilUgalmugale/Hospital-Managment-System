package com.app.dto;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.pojos.Patient;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class AppointmentDTO {
	private Integer id;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate apptDate;

	@JsonIgnoreProperties({ "mediPrescs", "testPrescs"})
	private Patient apptPatient;

	public AppointmentDTO() {
		System.out.println("in appt dto ");
	}

	public AppointmentDTO(Integer id, LocalDate apptDate, Patient apptPatient) {
		super();
		this.id = id;
		this.apptDate = apptDate;
		this.apptPatient = apptPatient;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDate getApptDate() {
		return apptDate;
	}

	public void setApptDate(LocalDate apptDate) {
		this.apptDate = apptDate;
	}

	@Override
	public String toString() {
		return "AppointmentDTO [id=" + id + ", apptDate=" + apptDate + ", apptPatient=" + apptPatient + "]";
	}

	public Patient getApptPatient() {
		return apptPatient;
	}

	public void setApptPatient(Patient apptPatient) {
		this.apptPatient = apptPatient;
	}

}
