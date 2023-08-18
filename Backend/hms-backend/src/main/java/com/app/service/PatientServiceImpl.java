package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.cust_exce.PrescriptionExceptionHandling;
import com.app.cust_exce.UserHandlingException;
import com.app.dao.AppointmentRepository;
import com.app.dao.MedicinePrescriptionRepository;
import com.app.dao.PatientRepository;
import com.app.dao.PaymentRepository;
import com.app.dto.AppointmentResponce;
import com.app.dto.BookAppointment;
import com.app.dto.EditPatientDTO;
import com.app.dto.PatientLoginResponce;
import com.app.dto.PatientRegister;
import com.app.dto.PatientResponce;
import com.app.dto.PrescriptionDTO;
import com.app.pojos.Appointment;
import com.app.pojos.MedicinePrescription;
import com.app.pojos.Patient;
import com.app.pojos.Payment;

@Service
@Transactional
public class PatientServiceImpl implements IPatientService {

	@Autowired
	private MedicinePrescriptionRepository mediPresc;
	@Autowired
	private AppointmentRepository appointRepo;
	@Autowired
	private PatientRepository patientRepo;
	@Autowired
	private PaymentRepository paymemtRepo;

	// authenticate patient method
	@Override
	public PatientLoginResponce authenticateUser(String email, String password) {

		Patient p1 = (patientRepo.findByEmailAndPassword(email, password)
				.orElseThrow(() -> new UserHandlingException("Invalid Credentials")));
//		System.out.println("patient p1 "+p1);
		PatientLoginResponce p = new PatientLoginResponce();
//		System.out.println("patientres p "+p);
		BeanUtils.copyProperties(p1, p);
//		System.out.println("patientres p "+p);
		return p;
	}

	//register patient
	@Override
	public Patient registerPatient(PatientRegister patReg) {
		System.out.println("in reg pati "+patReg);
		Patient p= new Patient(patReg.getName(), patReg.getEmail(), patReg.getPassword(), patReg.getGender());
		System.out.println("in reg pati "+p);
		
		return patientRepo.save(p);
	}
	// book appointment
	@Override
	public AppointmentResponce bookAppointment(BookAppointment bookAppoint) {
		Appointment appointmnet = new Appointment();
		
//		System.out.println(bookAppoint);
		BeanUtils.copyProperties(bookAppoint, appointmnet);
//		System.out.println(appointmnet);
		Appointment ap= appointRepo.save(appointmnet);
		System.out.println("patient added "+ap);
		Payment pay=new Payment(ap.getApptDate(), ap.getApptPatient(), ap, 300);
		paymemtRepo.save(pay);
		AppointmentResponce ar=new AppointmentResponce();
		BeanUtils.copyProperties(ap, ar);
		return ar;
	}

	// view prescriptions by id method
	@Override
	public List<PrescriptionDTO> viewPrescriptions(Integer pId) {
		List<PrescriptionDTO> prescriptions = new ArrayList<PrescriptionDTO>();
		List<MedicinePrescription> m = mediPresc.findByPatientId(pId)
				.orElseThrow(() -> new PrescriptionExceptionHandling("No prescriptions found"));
//		System.out.println(m.get(0).getMedicines());
//		m.get(0).getPatient();
		System.out.println(m);
		if (m != null) {
			for (MedicinePrescription mp : m) {
				prescriptions.add(new PrescriptionDTO(mp.getId(), mp.getMedicines(), mp.getPrescDate(),
						mp.getDoctor().getName()));
			}
		}
		return prescriptions;
	}
	
	//get patient profile
	@Override
	public PatientResponce getProfile(Integer id) {
		PatientResponce p1= new PatientResponce();
		Patient p= patientRepo.findById(id).orElseThrow(() -> new UserHandlingException("profile not found"));
		BeanUtils.copyProperties(p, p1);
		return p1;
	}

	//edit patient profile
	@Override
	public PatientResponce editPatientProfile(EditPatientDTO editPatient) {
		Patient p= (patientRepo.findByEmail(editPatient.getEmail())
				.orElseThrow(() -> new UserHandlingException("Invalid email")));
		System.out.println("persitent "+ p);
		PatientResponce p2= new PatientResponce();
		System.out.println("DTO "+editPatient);
		BeanUtils.copyProperties(editPatient, p, "mediPrescs","testPrescs");
		System.out.println("transient "+p);
		BeanUtils.copyProperties(p, p2,"mediPrescs","testPrescs","id");
		System.out.println("P resopnce "+p);
		return p2;
	}
}
