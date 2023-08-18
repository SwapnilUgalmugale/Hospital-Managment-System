package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.cust_exce.ReceptionistHandlerException;
import com.app.dao.AdmitPatientRepository;
import com.app.dao.AppointmentRepository;
import com.app.dao.DepartmentRepository;
import com.app.dao.PatientRepository;
import com.app.dao.PaymentRepository;
import com.app.dto.AcceptPaymentRequest;
import com.app.dto.AdmitPatientDto;
import com.app.dto.AppointmentDTO;
import com.app.dto.TotalCharges;
import com.app.pojos.AdmitPatient;
import com.app.pojos.Appointment;
import com.app.pojos.Department;
import com.app.pojos.Patient;
import com.app.pojos.Payment;

@Service
@Transactional
public class ReceptionistServiceImpl implements IReceptionistService {

	@Autowired
	private AdmitPatientRepository admitPatRepo;
	@Autowired
	private AppointmentRepository apptRepo;
	@Autowired
	private PaymentRepository payRepo;
	@Autowired
	private PatientRepository patRepo;
	@Autowired
	private DepartmentRepository deptRepo;
	
	@Override
	public AdmitPatient admitNewPatient(AdmitPatientDto p) {
		System.out.println(p);
		Appointment appointment=apptRepo.findById(p.getAppointment()).get();
		Department department=deptRepo.findById(p.getDepartment()).get();
		int patId=appointment.getApptPatient().getId();
		Patient patient=patRepo.findById(patId).get();
		AdmitPatient admiPatient=new AdmitPatient(p.getAdmitDate(), null, patient, appointment, department);
		try {
			admiPatient = admitPatRepo.save(admiPatient);
		} catch (Exception e) {
			throw new ReceptionistHandlerException("Invalid appt id, dept id or patient id ");
		}
		return admiPatient;
	}
	@Override
	public List<AdmitPatientDto> getAllAdmitPatients() {
		List<AdmitPatientDto> list= new ArrayList<>();
		List<AdmitPatient> patients = admitPatRepo.findAllAdmitPatients();
		for (AdmitPatient p : patients) {
			AdmitPatientDto adp=new AdmitPatientDto(p.getId(), p.getAdmitDate(), p.getDischargeDate(), p.getPatient().getId(), p.getAppointment().getId(), p.getDepartment().getId());
			list.add(adp);
		}
//		System.out.println("patients:  "+ patients);
		System.out.println("AdmitPatientDto "+list);
		return list;
	}
	@Override
	public AdmitPatientDto dischargePatient(int admitPatientId) {
		AdmitPatient patient = admitPatRepo.findById(admitPatientId).orElseThrow(()-> new ReceptionistHandlerException("Invalid Id for admit patient"));
		patient.setDischargeDate(LocalDate.now());
		admitPatRepo.save(patient);
		AdmitPatientDto adp= new AdmitPatientDto();
		BeanUtils.copyProperties(patient, adp);
		return adp;
	}
	@Override
	public List<AppointmentDTO> getAppointments(int doctorId) {
		List<Appointment> appts = apptRepo.findByApptDateAndApptDoctorId(LocalDate.now(), doctorId);
		List<AppointmentDTO> list= new ArrayList<AppointmentDTO>();
		for (Appointment a : appts) {
			list.add(new AppointmentDTO(a.getId(), a.getApptDate(), a.getApptPatient()));
		}
		return list;
	}
	@Override
	public Payment acceptPayment(AcceptPaymentRequest apr) {
		System.out.println(apr);
		Payment p=payRepo.findByPatientIdAndAppointmentId(apr.getPatientId(),apr.getApptId());
		System.out.println(p);
		p.setTestCharges(apr.getTestCharges());
		p.setWardCharges(apr.getWardCharges());
		p.setLastPayDate(LocalDate.now());
		return payRepo.save(p);
	}
	@Override
	public List<AppointmentDTO> getAllAppointmentsDto() {
		List<Appointment> appts = apptRepo.findAll();
		List<AppointmentDTO> list= new ArrayList<AppointmentDTO>();
		for (Appointment a : appts) {
			list.add(new AppointmentDTO(a.getId(), a.getApptDate(), a.getApptPatient()));
		}
		return list;
	}
	public List<AppointmentDTO> getAllAppointments() {
		List<AppointmentDTO> appointmentsDto = this.getAllAppointmentsDto();
		List<AdmitPatientDto> admitPatients = this.getAllAdmitPatients();
		List<AppointmentDTO> list= new ArrayList<AppointmentDTO>();
		for (AppointmentDTO a:appointmentsDto) {
			for(AdmitPatientDto p:admitPatients) {
				if(a.getApptPatient().getId()==p.getPatient() && !list.contains(a))
					list.add(a);
			}
		}
		for (AppointmentDTO a:list) 
			appointmentsDto.remove(a);
		return appointmentsDto;
	}
	@Override
	public TotalCharges getTotalCharges() {
		TotalCharges totalCharges = new TotalCharges(); 
		totalCharges.setTotalConsCharges(payRepo.getConsCharges());
		totalCharges.setTotalLabCharges(payRepo.getTestCharges());
		totalCharges.setTotalWardCharges(payRepo.getWardCharges());
		return totalCharges;
	}
}
