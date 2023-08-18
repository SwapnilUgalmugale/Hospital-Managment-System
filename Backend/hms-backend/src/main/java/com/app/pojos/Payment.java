package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "payments")
@Getter
@Setter
@NoArgsConstructor
public class Payment extends BaseEntity {

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate lastPayDate;
	@OneToOne
	@JoinColumn(name = "patient_id", nullable = false)
	private Patient patient;

	@OneToOne
	@JoinColumn(name = "appt_id", nullable = false)
	private Appointment appointment;
	
	
	private double consultationCharges;
	private double wardCharges;
	private double testCharges;
	

//	public Payment() {
//		// TODO Auto-generated constructor stub
//	}


	public Payment(LocalDate lastPayDate, Patient patient, Appointment appointment, double consultationCharges) {
		super();
		this.lastPayDate = lastPayDate;
		this.patient = patient;
		this.appointment = appointment;
		this.consultationCharges = consultationCharges;
	}


//	public LocalDate getLastPayDate() {
//		return lastPayDate;
//	}
//
//
//	public void setLastPayDate(LocalDate lastPayDate) {
//		this.lastPayDate = lastPayDate;
//	}
//
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
//	public double getConsultationCharges() {
//		return consultationCharges;
//	}
//
//	public void setConsultationCharges(double consultationCharges) {
//		this.consultationCharges = consultationCharges;
//	}
//
//	public double getWardCharges() {
//		return wardCharges;
//	}
//
//	public void setWardCharges(double wardCharges) {
//		this.wardCharges = wardCharges;
//	}
//
//	public double getTestCharges() {
//		return testCharges;
//	}
//
//	public void setTestCharges(double testCharges) {
//		this.testCharges = testCharges;
//	}


	@Override
	public String toString() {
		return "Payment [lastPayDate=" + lastPayDate + ", patient=" + patient + ", appointment=" + appointment
				+ ", consultationCharges=" + consultationCharges + ", wardCharges=" + wardCharges + ", testCharges="
				+ testCharges + "]";
	}
	
}
