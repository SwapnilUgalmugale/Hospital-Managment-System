package com.app.dto;

public class MedicalTestDto {
	private Integer id;
	private String name;
	
	private double charges;

	public MedicalTestDto(Integer id, String name, double charges) {
		super();
		this.id = id;
		this.name = name;
		this.charges = charges;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getCharges() {
		return charges;
	}

	public void setCharges(double charges) {
		this.charges = charges;
	}

	@Override
	public String toString() {
		return "MedicalTestDto [id=" + id + ", name=" + name + ", charges=" + charges + "]";
	}
	
}
