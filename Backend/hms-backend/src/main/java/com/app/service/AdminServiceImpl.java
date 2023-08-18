package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.cust_exce.AdminHandlerException;
import com.app.dao.AdminRepository;
import com.app.dao.DepartmentRepository;
import com.app.dto.EmployeeDto;
import com.app.dto.EmployeeUpdateDto;
import com.app.pojos.Employee;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {
	@Autowired
	private AdminRepository adminRepo;
	@Autowired
	private DepartmentRepository deptRepo;
	@Autowired
	private ModelMapper modelMapper;

	public AdminServiceImpl() {
		System.out.println("In c'tor of " + getClass().getName());
	}

	@Override
	public Employee addEmployee(EmployeeDto empDto) {
		// create new employee instance
		
		
		Employee e = new Employee();
		System.out.println("in admin Service addEmployee empDto: " + empDto);
		e.setDepartment(deptRepo.findById(empDto.getDepartment()).get());
		// copy properties of empDto into employee instance
		BeanUtils.copyProperties(empDto, e, "id","department");
		
		System.out.println("in admin Service addEmployee e: " + e);
		// save state of transient employee pojo
		return adminRepo.save(e);
	    
	}// return detached pojo

	@Override
	public boolean deleteEmployee(int empId) {
		if (adminRepo.existsById(empId)) {
			adminRepo.deleteById(empId);
			return true;
		} else
			return false;
	}

	@Override
	public List<Employee> getAllEmployees() {
		return adminRepo.getAllEmployees();
	}

	@Override
	public Employee updateEmployeeDetails(int empId, EmployeeUpdateDto empUpdateDto) {
		Employee employee = adminRepo.findById(empId)
				.orElseThrow(() -> new AdminHandlerException("Employee with id " + empId + " does not exist"));
		System.out.println("In service updateEmployeeDetails employee: " + employee + " Dto: " + empUpdateDto);
		BeanUtils.copyProperties(empUpdateDto, employee);
		System.out.println("In service updateEmployeeDetails employee: " + employee);

		return adminRepo.save(employee);
	}
}
