package com.app.dto;

import java.util.ArrayList;
import java.util.List;

public class AdmitPatientListDto {
	private List<AdmitPatientDto> list;
	public AdmitPatientListDto() {
		list=new ArrayList<>();
	}
	
	public AdmitPatientListDto(List<AdmitPatientDto> list) {
		super();
		this.list = list;
	}

	public List<AdmitPatientDto> getList() {
		return list;
	}

	public void setList(List<AdmitPatientDto> list) {
		this.list = list;
	}

	@Override
	public String toString() {
		return "EmployeeListDto [list=" + list + "]";
	}
}
