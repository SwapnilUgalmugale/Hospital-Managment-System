package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.Employee;

@Repository
public interface AdminRepository extends JpaRepository<Employee, Integer> {
	@Query("select e from Employee e order by e.department")
	List<Employee> getAllEmployees();
}
