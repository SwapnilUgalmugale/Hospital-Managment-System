package com.app.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.app.pojos.MedicineItemQty;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class PrescriptionDTO {

	private Integer id;
	@JsonIgnoreProperties({"medPresc"})
	private List<MedicineItemQty> medicines = new ArrayList<MedicineItemQty>();
	private LocalDate prescDate;
	private String name;

	public PrescriptionDTO() {
		// TODO Auto-generated constructor stub
	}

	public PrescriptionDTO(Integer id, List<MedicineItemQty> medicines, LocalDate prescDate, String doctorName) {
		super();
		this.id = id;
		this.medicines = medicines;
		this.prescDate = prescDate;
		this.name = doctorName;
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

	public void setPrescDate(LocalDate prescDate) {
		this.prescDate = prescDate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
