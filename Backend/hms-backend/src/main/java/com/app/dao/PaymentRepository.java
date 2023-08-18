package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

	
	/*
	 * @Query("") void acceptPayment(int apptId, int patientId, double testCharges,
	 * double wardCharges);
	 */
	@Query("select p from Payment p where p.patient.id=:pId and p.appointment.id=:aId")
	Payment findByPatientIdAndAppointmentId(@Param("pId") int pId,@Param("aId") int aId);
	@Query("select sum(p.consultationCharges) from Payment p")
	double getConsCharges();
	@Query("select sum(p.testCharges) from Payment p")
	double getTestCharges();
	@Query("select sum(p.wardCharges) from Payment p")
	double getWardCharges();
	

}
