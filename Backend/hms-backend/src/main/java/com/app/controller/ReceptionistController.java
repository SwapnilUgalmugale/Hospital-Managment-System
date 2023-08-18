package com.app.controller;

import java.util.ArrayList;
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

import com.app.dto.AcceptPaymentRequest;
import com.app.dto.AdmitPatientDto;
import com.app.dto.AdmitPatientListDto;
import com.app.dto.AppointmentDTO;
import com.app.dto.DoctorDto;
import com.app.dto.TotalCharges;
import com.app.pojos.Payment;
import com.app.service.IDoctorService;
import com.app.service.IReceptionistService;

@CrossOrigin
@RestController
@RequestMapping("/receptionist")
public class ReceptionistController {

	@Autowired
	private IReceptionistService recpService;
	@Autowired
	private IDoctorService doctorService;

	public ReceptionistController() {
		System.out.println("In c'tor of " + getClass().getName());
	}

	@PostMapping("/admitPatient")
	public ResponseEntity<?> admitNewPatient(@RequestBody AdmitPatientDto p) {
//		AdmitPatient ap = new AdmitPatient();
//		BeanUtils.copyProperties(p, ap);
		System.out.println(p);
		return new ResponseEntity<>(recpService.admitNewPatient(p), HttpStatus.OK);
	}

	@GetMapping("/dischargePatient")
	public ResponseEntity<?> getAllAdmitPatients() {
		return new ResponseEntity<>(new AdmitPatientListDto(recpService.getAllAdmitPatients()), HttpStatus.OK);
	}

	@PutMapping("/dischargePatient/{admitPatientId}")
	public ResponseEntity<?> dischargePatient(@PathVariable int admitPatientId) {
		AdmitPatientDto p = recpService.dischargePatient(admitPatientId);
		return new ResponseEntity<>(p, HttpStatus.OK);
	}

	// api to get list of doctors to show drop down
	@GetMapping("/appointments")
	public ResponseEntity<?> getDoctors() {
		List<DoctorDto> doctors = doctorService.getDoctors();
		return new ResponseEntity<>(doctors, HttpStatus.OK);
	}

	@GetMapping("/appointments/{doctorId}")
	public ResponseEntity<?> showAppointments(@PathVariable int doctorId) {
		List<AppointmentDTO> appts = recpService.getAppointments(doctorId);
		return new ResponseEntity<>(appts, HttpStatus.OK);
	}

	@PutMapping("/acceptPayment")
	public ResponseEntity<?> acceptPayment(@RequestBody AcceptPaymentRequest apr) {
		Payment p = recpService.acceptPayment(apr);
		if (p != null)
			return new ResponseEntity<>("Payment accepted successfully ", HttpStatus.ACCEPTED);
		else
			return new ResponseEntity<>("Payment not accepted ", HttpStatus.INTERNAL_SERVER_ERROR);
	}
	@GetMapping("/allAppointments")
	public ResponseEntity<?> getAllAppointments() {
		List<AppointmentDTO> appts = recpService.getAllAppointments();
		return new ResponseEntity<>(appts, HttpStatus.OK);
	}
	@GetMapping("/totalCharges")
	public ResponseEntity<?> getTotalCharges(){
		TotalCharges charges=recpService.getTotalCharges();
		List<Double> list=new ArrayList<Double>();
		list.add(charges.getTotalConsCharges());
		list.add(charges.getTotalLabCharges());
		list.add(charges.getTotalWardCharges());
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
}
