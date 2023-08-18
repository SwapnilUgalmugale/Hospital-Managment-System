package com.app.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.app.pojos.Employee;
import com.app.pojos.MedicineItemQty;
import com.app.pojos.Patient;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class MedicinePrescResponceDTO {
	
	private Integer id;
	@JsonIgnoreProperties({"medPresc","id"})
	private List<MedicineItemQty> medicines= new ArrayList<>();
	
	private LocalDate prescDate;
	
	@JsonIgnoreProperties({"city","age","bloodGroup","mediPrescs","testPrescs","email","password","gender","contact"})
	private Patient patient;

	@JsonIgnoreProperties({"email","password","gender","contact","role","dob","department"})
	private Employee doctor;
	public MedicinePrescResponceDTO() {
		// TODO Auto-generated constructor stub
	}
	public MedicinePrescResponceDTO(Integer id, List<MedicineItemQty> medicines, LocalDate medPrescDate,
			Patient patient, Employee doctor) {
		super();
		this.id = id;
		this.medicines = medicines;
		this.prescDate = medPrescDate;
		this.patient = patient;
		this.doctor = doctor;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public List<MedicineItemQty> getMedicines() {
		return medicines;
	}
	public void setMedicines(List<MedicineItemQty> medicines) {
		this.medicines = medicines;
	}
	public LocalDate getPrescDate() {
		return prescDate;
	}
	public void setPrescDate(LocalDate medPrescDate) {
		this.prescDate = medPrescDate;
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
		return "MedicinePrescResponceDTO [id=" + id + ", medicines=" + medicines + ", prescDate=" + prescDate
				+ ", patient=" + patient + ", doctor=" + doctor + "]";
	}
	
}
