package com.app.dto;

import java.util.ArrayList;
import java.util.List;

import com.app.pojos.MedicineItemQty;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class CreateMedicinePrescDTO {

	private Integer pId;
	
	@JsonIgnoreProperties({"pricePerTab","name"})
	List<MedicineItemQty> medicines=new ArrayList<>();
	
	public CreateMedicinePrescDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public CreateMedicinePrescDTO(Integer pId, List<MedicineItemQty> medicines) {
		super();
		this.pId = pId;
		this.medicines = medicines;
	}

	public Integer getpId() {
		return pId;
	}
	public void setpId(Integer pId) {
		this.pId = pId;
	}

	public List<MedicineItemQty> getMedicines() {
		return medicines;
	}

	public void setMedicines(List<MedicineItemQty> medicines) {
		this.medicines = medicines;
	}

	@Override
	public String toString() {
		return "CreateMedicinePrescDTO [pId=" + pId + ", medicines=" + medicines + "]";
	}
	
	
}
