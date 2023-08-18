package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AppointmentRepository;
import com.app.dao.MedicalTestRepository;
import com.app.dao.MedicinePrescriptionRepository;
import com.app.dao.MedicineRepository;
import com.app.dao.PatientRepository;
import com.app.dao.TestPrescriptionRepository;
import com.app.dao.UserRepository;
import com.app.dto.AppointmentDTO;
import com.app.dto.CreateMedicinePrescDTO;
import com.app.dto.CreatePrescriptionRequest;
import com.app.dto.DoctorDto;
import com.app.dto.MedicalTestDto;
import com.app.dto.MedicinePrescResponceDTO;
import com.app.dto.TestPrescriptionDtoByDr;
import com.app.pojos.Appointment;
import com.app.pojos.Employee;
import com.app.pojos.MedicalTest;
import com.app.pojos.Medicine;
import com.app.pojos.MedicineItemQty;
import com.app.pojos.MedicinePrescription;
import com.app.pojos.Patient;
import com.app.pojos.Role;
import com.app.pojos.TestPrescription;

@Service
@Transactional
public class DoctorServiceImpl implements IDoctorService {
	@Autowired
	private AppointmentRepository appointmentRepository;
	@Autowired
	private UserRepository userRepo;

	@Autowired
	private MedicineRepository medRepo;

	@Autowired
	private MedicalTestRepository medicalRepository;
	
	@Autowired
	private PatientRepository patientRepo;

	@Autowired
	private MedicinePrescriptionRepository mediPresc;

	@Autowired
	private TestPrescriptionRepository testRepository;

	@Override
	public List<AppointmentDTO> findByIdAndApptDate(Integer id, LocalDate date) {
		System.out.println("in get appointments service method");
		// System.out.println( appointmentRepository.findByIdAndApptDate(id, date));
		List<AppointmentDTO> list = new ArrayList<AppointmentDTO>();
		List<Appointment> apptList = appointmentRepository.findByApptDateAndApptDoctorId(date, id);
		for (Appointment a : apptList) {
			list.add(new AppointmentDTO(a.getId(), a.getApptDate(), a.getApptPatient()));
		}
		System.out.println(list);
		System.out.println(apptList);
		return list;
	}

	@Override
	public List<DoctorDto> getDoctors() {
		List<Employee> doctors = userRepo.findByRole(Role.DOCTOR);
		List<DoctorDto> list = new ArrayList<DoctorDto>();
		for (Employee d : doctors) {
			list.add(new DoctorDto(d.getId(), d.getName(), d.getDepartment().getId()));
		}
		return list;
	}

	@Override
	public MedicinePrescResponceDTO createMedicinePrescription(Integer dId, CreateMedicinePrescDTO medPresc) {
		Employee dr = userRepo.findById(dId).get();
		MedicinePrescription presc = new MedicinePrescription();

		for (MedicineItemQty medicines : medPresc.getMedicines()) {
			Medicine med = medRepo.findById(medicines.getMedicine().getId()).get();
			presc.getMedicines().add(new MedicineItemQty(med, medicines.getQty()));
		}

		Patient p = patientRepo.findById(medPresc.getpId()).get();
		presc.setDoctor(dr);
		presc.setPatient(p);
		presc.setPrescDate(LocalDate.now());

		MedicinePrescription save = mediPresc.save(presc);

		List<MedicineItemQty> newList = save.getMedicines();
		for (MedicineItemQty mq : newList) {
			mq.setMedPresc(save);
		}
		MedicinePrescription s1 = mediPresc.save(save);
		
		MedicinePrescResponceDTO medRespDTO = new MedicinePrescResponceDTO();

		BeanUtils.copyProperties(s1, medRespDTO);

		return medRespDTO;
	}
	@Override
	public List<MedicalTestDto> findAll() {
		System.out.println("in find all tests service method");
		List<MedicalTest> test=medicalRepository.findAll();
		List<MedicalTestDto> dto=new ArrayList<MedicalTestDto>();
		for (MedicalTest medicalTest : test) {
			dto.add(new MedicalTestDto(medicalTest.getId(), medicalTest.getName(), medicalTest.getCharges()));
		}
		return dto;
	}

	@Override
	public List<Medicine> findAllMedicines() {
		// TODO Auto-generated method stub
		System.out.println("in find all medicines service method");
		return medRepo.findAll();
	}

	@Override
	public TestPrescriptionDtoByDr createTestPrescription(Integer d_id, CreatePrescriptionRequest request) {
		Employee dr=userRepo.findById(d_id).get();
		TestPrescription presc=new TestPrescription();
		for (Integer i : request.getTests_id()) {
			MedicalTest test=medicalRepository.findById(i).get();
			presc.getTests().add(test);
		}
		Patient p=patientRepo.findById(request.getP_id()).get();
		presc.setDoctor(dr);
		presc.setPatient(p);
		presc.setPrescDate(LocalDate.now());
		TestPrescription test=testRepository.save(presc);
		testRepository.save(test);
		TestPrescriptionDtoByDr presc_dto=new TestPrescriptionDtoByDr();
		System.out.println("dserimpl"+presc_dto);
		BeanUtils.copyProperties(test, presc_dto);
		
		return presc_dto;
	}
}
