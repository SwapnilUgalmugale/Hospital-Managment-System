package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Employee;
import com.app.pojos.Role;

public interface UserRepository extends JpaRepository<Employee, Integer> {
	@Query("select e from Employee e where e.email=:email and e.password=:password")
	Optional<Employee> findByEmailAndPassword(@Param("email") String email,@Param("password") String password);

	List<Employee> findByRole(Role doctor);
}
