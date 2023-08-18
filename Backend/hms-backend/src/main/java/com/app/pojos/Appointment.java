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
@Table(name = "appointments")
@Getter
@Setter
@NoArgsConstructor
public class Appointment extends BaseEntity {

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate apptDate;
	
	@OneToOne
	@JoinColumn(name = "patient_id")
	private Patient apptPatient;
	@OneToOne
	@JoinColumn(name = "doc_id")
	private Employee apptDoctor;
//	public Appointment() {
//		// TODO Auto-generated constructor stub
//	}
	
	
	public Appointment(LocalDate apptDate, Patient apptPatient, Employee apptDoctor) {
		super();
		this.apptDate = apptDate;
		this.apptPatient = apptPatient;
		this.apptDoctor = apptDoctor;
	}

//	public LocalDate getApptDate() {
//		return apptDate;
//	}
//	public void setApptDate(LocalDate apptDate) {
//		this.apptDate = apptDate;
//	}
//	public Patient getApptPatient() {
//		return apptPatient;
//	}
//	public void setApptPatient(Patient apptPatient) {
//		this.apptPatient = apptPatient;
//	}
//	public Employee getApptDoctor() {
//		return apptDoctor;
//	}
//	public void setApptDoctor(Employee apptDoctor) {
//		this.apptDoctor = apptDoctor;
//	}


	@Override
	public String toString() {
		return "Appointment id="+getId()+", apptDate=" + apptDate ;
	}
	
}
