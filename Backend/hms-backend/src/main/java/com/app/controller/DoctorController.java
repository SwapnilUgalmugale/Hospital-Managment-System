package com.app.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AppointmentDTO;
import com.app.dto.CreateMedicinePrescDTO;
import com.app.dto.CreatePrescriptionRequest;
import com.app.dto.MedicalTestDto;
import com.app.pojos.Medicine;
import com.app.service.IDoctorService;

@CrossOrigin
@RestController
@RequestMapping("/doctor")
public class DoctorController {
	public DoctorController()
	{
		System.out.println("in dr controller");
	}

	@Autowired
	private IDoctorService doctorService;
	
	@GetMapping("/appointments/{id}")
	private  ResponseEntity<?> getAppointments(@PathVariable Integer id)
	{
		System.out.println("in get appt method of dr controller");
		LocalDate date=LocalDate.now();
		List<AppointmentDTO> list=doctorService.findByIdAndApptDate(id, date);
		list.forEach(System.out::println);
		if(list.size()==0) {
			System.out.println("no contents");
			return new ResponseEntity<>("No appointments today", HttpStatus.NO_CONTENT);
		}
		return ResponseEntity.ok(list);
	}
	
	@PostMapping("/medicine/prescription/{dId}")
	private ResponseEntity<?> createMedicinePrescription(@PathVariable Integer dId,@RequestBody CreateMedicinePrescDTO medPresc){
		return new ResponseEntity<>(doctorService.createMedicinePrescription(dId, medPresc), HttpStatus.OK);
	}
	@GetMapping("/tests")
	public ResponseEntity<?> getTestList()
	{
		System.out.println("in get all tests of drcontroller method");
		List<MedicalTestDto> list=doctorService.findAll();
		if(list.size()==0) {
			System.out.println("no contents");
			return new ResponseEntity<>("No tests available", HttpStatus.NO_CONTENT);
		}
		return ResponseEntity.ok(list);
	}
	@GetMapping("/medicines")
	public ResponseEntity<?> getMedicinesList()
	{
		System.out.println("in get all medicines of dr controller method");
		List<Medicine> list=doctorService.findAllMedicines();
		if(list.size()==0) {
			System.out.println("no contents");
			return new ResponseEntity<>("No tests available", HttpStatus.NO_CONTENT);
		}
		return ResponseEntity.ok(list);
	}
	@PostMapping("/tests/prescription/{id}")
	public ResponseEntity<?> createTestPrescription(@PathVariable Integer id,@RequestBody CreatePrescriptionRequest request)
	{
		System.out.println("in create presc of dr controller method");
		return ResponseEntity.ok(doctorService.createTestPrescription(id, request));
	}
}
