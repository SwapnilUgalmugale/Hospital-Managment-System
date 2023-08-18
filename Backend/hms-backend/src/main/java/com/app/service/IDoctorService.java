package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.dto.AppointmentDTO;
import com.app.dto.CreateMedicinePrescDTO;
import com.app.dto.CreatePrescriptionRequest;
import com.app.dto.DoctorDto;
import com.app.dto.MedicalTestDto;
import com.app.dto.MedicinePrescResponceDTO;
import com.app.dto.TestPrescriptionDtoByDr;
import com.app.pojos.Medicine;

public interface IDoctorService {

		List<AppointmentDTO> findByIdAndApptDate(Integer id, LocalDate date);

		List<DoctorDto> getDoctors();

		MedicinePrescResponceDTO createMedicinePrescription(Integer dId, CreateMedicinePrescDTO medPresc);

		List<Medicine> findAllMedicines();

		TestPrescriptionDtoByDr createTestPrescription(Integer d_id, CreatePrescriptionRequest request);

		List<MedicalTestDto> findAll();
}
