package com.app.dto;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.pojos.Appointment;
import com.app.pojos.Department;
import com.app.pojos.Patient;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//treated as a request body of admit patient request 
public class AdmitPatientDto {
	private int id;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate admitDate;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dischargeDate;
//	@JsonIgnoreProperties({"city","age","bloodGroup","mediPrescs","testPrescs","name","email","password","gender","contact"})
	private int patient;

//	@JsonIgnoreProperties({"apptDate","apptPatient","apptDoctor"})
	
	private int appointment;

//	@JsonIgnoreProperties({"admitPatients","name","doctors"})
	private int department;

	public AdmitPatientDto() {
		// TODO Auto-generated constructor stub
	}
	
	public AdmitPatientDto(int id, LocalDate admitDate, LocalDate dischargeDate, int patient, int appointment,
			int department) {
		super();
		this.id = id;
		this.admitDate = admitDate;
		this.dischargeDate = dischargeDate;
		this.patient = patient;
		this.appointment = appointment;
		this.department = department;
	}

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public LocalDate getAdmitDate() {
		return admitDate;
	}

	public void setAdmitDate(LocalDate admitDate) {
		this.admitDate = admitDate;
	}

	public LocalDate getDischargeDate() {
		return dischargeDate;
	}


	public void setDischargeDate(LocalDate dischargeDate) {
		this.dischargeDate = dischargeDate;
	}

	public int getPatient() {
		return patient;
	}

	public void setPatient(int patient) {
		this.patient = patient;
	}

	public int getAppointment() {
		return appointment;
	}

	public void setAppointment(int appointment) {
		this.appointment = appointment;
	}

	public int getDepartment() {
		return department;
	}

	public void setDepartment(int department) {
		this.department = department;
	}

	@Override
	public String toString() {
		return "AdmitPatientDto [id=" + id + ", admitDate=" + admitDate + ", dischargeDate=" + dischargeDate
				+ ", patient=" + patient + ", appointment=" + appointment + ", department=" + department + "]";
	}

}
