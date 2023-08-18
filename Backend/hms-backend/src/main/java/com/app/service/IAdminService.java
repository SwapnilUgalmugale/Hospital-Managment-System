package com.app.service;

import java.util.List;

import com.app.dto.EmployeeDto;
import com.app.dto.EmployeeUpdateDto;
import com.app.pojos.Employee;

public interface IAdminService {
	
	//req handling method to register employee
	Employee addEmployee(EmployeeDto empDto);
	//method to delete employee from employee id
	boolean deleteEmployee(int empId);
	//req handling method to get all employees sorted by Role
	List<Employee> getAllEmployees();
	Employee updateEmployeeDetails(int empId, EmployeeUpdateDto empUpdateDto);

}
