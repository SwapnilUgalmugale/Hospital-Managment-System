package com.app.dao;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.TestPrescription;

public interface LabRepository extends JpaRepository<TestPrescription, Integer> {
    @Query("select t from TestPrescription t left outer join fetch t.tests where t.patient.id=:patient_id and t.prescDate=:dt")
	TestPrescription findByPatientId(@Param("patient_id")  Integer id,@Param("dt")  LocalDate date);

	/*
	 * //@Query("select t from TestPrescription t where t.patient.id=:patient_id")
	 * TestPrescription findByPatientId(@Param("patient_id") Integer id);
	 */

}
