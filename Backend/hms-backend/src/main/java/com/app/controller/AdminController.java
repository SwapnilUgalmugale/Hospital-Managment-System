package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.EmployeeDto;
import com.app.dto.EmployeeListDto;
import com.app.dto.EmployeeUpdateDto;
import com.app.pojos.Employee;
import com.app.service.IAdminService;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private IAdminService adminService;

	public AdminController() {
		System.out.println("In c'tor of " + getClass().getName());
	}

	@PostMapping("/register")
	public ResponseEntity<?> processEmployeeRegistrationForm(@RequestBody EmployeeDto empDto) {

		return new ResponseEntity<>(adminService.addEmployee(empDto), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{empId}")
	public ResponseEntity<?> deleteEmployee(@PathVariable int empId) {
		boolean found = adminService.deleteEmployee(empId);
		if (found)
			return new ResponseEntity<>("Employee with id " + empId + " is deleted successfully", HttpStatus.OK);
		else
			return new ResponseEntity<>("Employee with id " + empId + " does not exist ", HttpStatus.NOT_FOUND);
	}

	@GetMapping
	public ResponseEntity<?> getAllEmployees() {
		List<Employee> employees = adminService.getAllEmployees();
		return new ResponseEntity<>(new EmployeeListDto(employees), HttpStatus.OK);
	}
	@PutMapping("/update/{empId}")
	public ResponseEntity<?> updateEmployeeDetails(@PathVariable int empId, @RequestBody EmployeeUpdateDto empUpdateDto){
		System.out.println("In rest: updateEmployeeDetails "+ empId +" "+ empUpdateDto);
		return new ResponseEntity<>(adminService.updateEmployeeDetails(empId, empUpdateDto),HttpStatus.OK);
	}
	
	/*
	 * @GetMapping("/admitPatients") public ResponseEntity<?> getAdmitPatients(){
	 * 
	 * }
	 */
}
