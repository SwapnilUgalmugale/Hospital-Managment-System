package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.TestPrescription;

public interface TestPrescriptionRepository extends JpaRepository<TestPrescription, Integer> {

}
