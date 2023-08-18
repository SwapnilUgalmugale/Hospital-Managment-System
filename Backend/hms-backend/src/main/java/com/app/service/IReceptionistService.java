package com.app.service;

import java.util.List;

import com.app.dto.AcceptPaymentRequest;
import com.app.dto.AdmitPatientDto;
import com.app.dto.AppointmentDTO;
import com.app.dto.TotalCharges;
import com.app.pojos.AdmitPatient;
import com.app.pojos.Payment;

public interface IReceptionistService {
	//method to admit the patient
	AdmitPatient admitNewPatient(AdmitPatientDto p);
	//methdo to get all admit patients (whose discharge date is null)
	List<AdmitPatientDto> getAllAdmitPatients();
	//method to discharge a patient i.e set discharge date for that patient
	AdmitPatientDto dischargePatient(int admitPatientId);
	//method to get all apointments for a doctor from doctor id
	List<AppointmentDTO> getAppointments(int doctorId);
	Payment acceptPayment(AcceptPaymentRequest apr);
	//method to get appts to show non admit patients
	List<AppointmentDTO> getAllAppointments();
	//helper method for getallappointments  
	List<AppointmentDTO> getAllAppointmentsDto();
	TotalCharges getTotalCharges();
}
