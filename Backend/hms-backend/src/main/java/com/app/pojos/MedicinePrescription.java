package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "med_presc")
@Getter
@Setter
@NoArgsConstructor
public class MedicinePrescription extends BaseEntity {

	@OneToMany(mappedBy = "medPresc",cascade = CascadeType.ALL)
	private List<MedicineItemQty> medicines= new ArrayList<MedicineItemQty>();
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate prescDate;

	@ManyToOne
	@JoinColumn(name="patient_id")
	private Patient patient;
	
	@OneToOne
	@JoinColumn(name="doctor_id")
	private Employee doctor;
	
//	public MedicinePrescription() {
//		// TODO Auto-generated constructor stub
//	}

	public MedicinePrescription(List<MedicineItemQty> medicines, LocalDate prescDate, Patient patient,
			Employee doctor) {
		super();
		this.medicines = medicines;
		this.prescDate = prescDate;
		this.patient = patient;
		this.doctor = doctor;
	}

	public List<MedicineItemQty> getMedicines() {
		return medicines;
	}

	public void setMedicines(List<MedicineItemQty> medicines) {
		this.medicines = medicines;
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
		return "MedicinePrescription [medicines=" + medicines + ", prescDate=" + prescDate + ", patient=" + patient
				+ ", doctor=" + doctor + "]";
	}
	
}
