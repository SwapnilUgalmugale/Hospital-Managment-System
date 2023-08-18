package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.MedicalTest;

public interface MedicalTestRepository extends JpaRepository<MedicalTest, Integer> {
	

}
