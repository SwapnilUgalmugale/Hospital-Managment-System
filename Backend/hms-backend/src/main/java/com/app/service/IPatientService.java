package com.app.service;

import java.util.List;

import com.app.dto.AppointmentResponce;
import com.app.dto.BookAppointment;
import com.app.dto.EditPatientDTO;
import com.app.dto.PatientLoginResponce;
import com.app.dto.PatientRegister;
import com.app.dto.PatientResponce;
import com.app.dto.PrescriptionDTO;
import com.app.pojos.Patient;

public interface IPatientService {
	//authenticate patient functinality 
	PatientLoginResponce authenticateUser(String email,String password);
	
	//register patient functionality
	Patient registerPatient(PatientRegister patReg);
	
	//book appoinntment functinality
	AppointmentResponce bookAppointment(BookAppointment bookAppoint);
	
	//view all prescriptions functinality
	List<PrescriptionDTO> viewPrescriptions(Integer pId);
	
	//get patient profile
	PatientResponce getProfile(Integer id);
	
	//update patient profile functinality
	PatientResponce editPatientProfile(EditPatientDTO editPatient);
}
