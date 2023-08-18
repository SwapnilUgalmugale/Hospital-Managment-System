package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "medicines")
@Getter
@Setter
@NoArgsConstructor
public class Medicine extends BaseEntity {
	@Column(length = 20)
	private String name;
	private double pricePerTab;

//	public Medicine() {
//		// TODO Auto-generated constructor stub
//	}

	public Medicine(String name, double pricePerTab) {
		super();
		this.name = name;
		this.pricePerTab = pricePerTab;
	}

//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public double getPricePerTab() {
//		return pricePerTab;
//	}
//
//	public void setPricePerTab(double pricePerTab) {
//		this.pricePerTab = pricePerTab;
//	}

	@Override
	public String toString() {
		return "Medicine id=" + getId() + ", name=" + name + ", pricePerTab=" + pricePerTab;
	}

}
