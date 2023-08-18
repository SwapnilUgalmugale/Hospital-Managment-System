package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer> {

	@Query("select p from Patient p where p.email=:email and p.password=:password")
	Optional<Patient> findByEmailAndPassword(@Param("email") String email,@Param("password") String password);
	
	

	Optional<Patient> findByEmail(String email);
}
