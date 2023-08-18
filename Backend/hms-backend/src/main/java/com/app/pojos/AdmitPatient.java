package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "admit_patients")
@Getter
@Setter
@NoArgsConstructor
public class AdmitPatient extends BaseEntity {

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate admitDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dischargeDate;
	
	@JsonIgnoreProperties({"mediPrescs","testPrescs"})
	@OneToOne
	@JoinColumn(name = "patient_id",nullable = false)
	private Patient patient;
	
	@JsonIgnoreProperties("apptPatient")
	@OneToOne
	@JoinColumn(name = "appt_id",nullable = false)
	private Appointment appointment;
	
	@JsonIgnoreProperties({"admitPatients","doctors"})
	@ManyToOne
	@JoinColumn(name = "dept_id",nullable = false)
	private Department department;
	
//	public AdmitPatient() {
//		// TODO Auto-generated constructor stub
//	}

	public AdmitPatient(LocalDate admitDate, LocalDate dischargeDate, Patient patient, Appointment appointment,
			Department department) {
		super();
		this.admitDate = admitDate;
		this.dischargeDate = dischargeDate;
		this.patient = patient;
		this.appointment = appointment;
		this.department = department;
	}
//
//	public LocalDate getAdmitDate() {
//		return admitDate;
//	}
//
//	public void setAdmitDate(LocalDate admitDate) {
//		this.admitDate = admitDate;
//	}
//
//	public LocalDate getDischargeDate() {
//		return dischargeDate;
//	}
//
//	public void setDischargeDate(LocalDate dischargeDate) {
//		this.dischargeDate = dischargeDate;
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
//	public Appointment getAppointment() {
//		return appointment;
//	}
//
//	public void setAppointment(Appointment appointment) {
//		this.appointment = appointment;
//	}
//
//	public Department getDepartment() {
//		return department;
//	}
//
//	public void setDepartment(Department department) {
//		this.department = department;
//	}

	@Override
	public String toString() {
		return "AdmitPatient id="+getId()+", admitDate=" + admitDate + ", dischargeDate=" + dischargeDate ;
	}
	
	
}
