package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookAppointment;
import com.app.dto.DoctorDto;
import com.app.dto.EditPatientDTO;
import com.app.dto.LoginRequest;
import com.app.dto.PatientRegister;
import com.app.service.IDoctorService;
import com.app.service.IPatientService;
@CrossOrigin
@RestController
@RequestMapping("/patient")
public class PatientController {
	
	@Autowired
	IPatientService patientService;
	
	@Autowired IDoctorService doctorService;
	
	//patient login functionality
	@PostMapping("/login")
	public ResponseEntity<?> processLoginForm(@RequestBody LoginRequest request) {
		System.out.println("in "+getClass().getName());
			return new ResponseEntity<>(patientService.authenticateUser(request.getEmail(), request.getPassword()), HttpStatus.OK);
	}
	
	//register Patient
	@PostMapping("/register")
	public ResponseEntity<?> processPatientRegistrationForm(@RequestBody PatientRegister patReg) {

		return new ResponseEntity<>(patientService.registerPatient(patReg),HttpStatus.OK);
	}
	//list of doctors
	@GetMapping("/bookAppointment")
	public ResponseEntity<?> getDoctors(){
		List<DoctorDto>doctors=doctorService.getDoctors();
		return new ResponseEntity<>(doctors, HttpStatus.OK);
	}
	//patient book appointment
	@PostMapping("/bookAppointment")
	public ResponseEntity<?> bookAppointment(@RequestBody BookAppointment bookApp){
		System.out.println("in "+getClass().getName()+bookApp);
		return new ResponseEntity<>(patientService.bookAppointment(bookApp),HttpStatus.OK);
	}
	
	//patient view medicine presc
	@GetMapping("/viewPrescription/{pId}")
	public ResponseEntity<?> viewPrescription(@PathVariable int pId ){
		System.out.println("in view presc controller");
		return new ResponseEntity<>(patientService.viewPrescriptions(pId), HttpStatus.OK);
	}
	
	@GetMapping("/editProfile/{id}")
	public ResponseEntity<?> getProfile(@PathVariable int id){
		return new ResponseEntity<>(patientService.getProfile(id), HttpStatus.OK);
	}
	
	//edit Profile
	@PutMapping("/editProfile/{id}")
	public ResponseEntity<?> editPatientProfile(@RequestBody EditPatientDTO ePatient){
		return new ResponseEntity<>(patientService.editPatientProfile(ePatient), HttpStatus.OK);
	}
}
