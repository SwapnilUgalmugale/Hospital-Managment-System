package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class MedicineItemQty extends BaseEntity {

	@OneToOne
	private Medicine medicine;

	@ManyToOne(cascade = CascadeType.ALL)
	private MedicinePrescription medPresc;

	private Integer qty;

//	public MedicineItemQty() {
//		// TODO Auto-generated constructor stub
//	}

	public MedicineItemQty(Medicine medicine, MedicinePrescription medPresc, Integer qty) {
		super();
		this.medicine = medicine;
		this.medPresc = medPresc;
		this.qty = qty;
	}

	public MedicineItemQty(Medicine med, Integer qty) {
		super();
		this.medicine = med;
		this.qty = qty;
	}

//	public Medicine getMedicine() {
//		return medicine;
//	}
//
//	public void setMedicine(Medicine medicine) {
//		this.medicine = medicine;
//	}
//
//	public MedicinePrescription getMedPresc() {
//		return medPresc;
//	}
//
//	public void setMedPresc(MedicinePrescription medPresc) {
//		this.medPresc = medPresc;
//	}
//
//	public Integer getQty() {
//		return qty;
//	}
//
//	public void setQty(Integer qty) {
//		this.qty = qty;
//	}

	@Override
	public String toString() {
		return "MedicineItemQty id="+getId()+", medicine=" + medicine + ",  qty=" + qty + "]";
	}

	

}
