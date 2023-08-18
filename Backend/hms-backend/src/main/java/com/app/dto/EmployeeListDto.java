package com.app.dto;

import java.util.ArrayList;
import java.util.List;

import com.app.pojos.Employee;

public class EmployeeListDto {
	private List<Employee> list;
	public EmployeeListDto() {
		list=new ArrayList<Employee>();
	}
	public EmployeeListDto(List<Employee> list) {
		super();
		this.list = list;
	}
	public List<Employee> getList() {
		return list;
	}
	public void setList(List<Employee> list) {
		this.list = list;
	}
	@Override
	public String toString() {
		System.out.println("inside EmployeeListDto toString ");
		return "EmployeeListDto [list=" + list + "]";
	}
}
