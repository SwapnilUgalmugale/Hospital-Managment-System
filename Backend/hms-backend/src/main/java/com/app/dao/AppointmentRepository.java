package com.app.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer>{
	@Query("select a from Appointment a left outer join fetch a.apptPatient where a.apptDoctor.id=:doc_id and a.apptDate=:dt")
	List<Appointment> findByApptDateAndApptDoctorId(@Param("dt")LocalDate date,@Param("doc_id")Integer id);

}
