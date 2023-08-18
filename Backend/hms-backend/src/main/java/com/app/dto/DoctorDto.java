package com.app.dto;

public class DoctorDto {
	private int id;
	private String name;
	private int deptId;
	
	public DoctorDto() {
		
	}

	public DoctorDto(int id, String name, int deptId) {
		super();
		this.id = id;
		this.name = name;
		this.deptId = deptId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getDeptId() {
		return deptId;
	}

	public void setDeptId(int deptId) {
		this.deptId = deptId;
	}

	@Override
	public String toString() {
		return "DoctorDto [id=" + id + ", name=" + name + ", deptId=" + deptId + "]";
	}
	
}
