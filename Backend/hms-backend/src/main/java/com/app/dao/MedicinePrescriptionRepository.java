package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.MedicinePrescription;

public interface MedicinePrescriptionRepository extends JpaRepository<MedicinePrescription, Integer> {

	//
	 Optional<List<MedicinePrescription>> findByPatientId(int pId);
	
}
