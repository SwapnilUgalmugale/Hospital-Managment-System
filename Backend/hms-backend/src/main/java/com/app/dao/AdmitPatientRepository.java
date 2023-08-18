package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.AdmitPatient;

public interface AdmitPatientRepository extends JpaRepository<AdmitPatient, Integer> {
	
	@Query("select a from AdmitPatient a where a.dischargeDate=null")
	List<AdmitPatient> findAllAdmitPatients();
	
}
