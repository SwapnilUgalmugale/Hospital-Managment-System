package com.app.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.LabRepository;
import com.app.dao.MedicalTestRepository;
import com.app.dao.TestReportRepository;
import com.app.dto.TestPrescriptiondto;
import com.app.dto.TestReportDto;
import com.app.pojos.MedicalTest;
import com.app.pojos.TestPrescription;
import com.app.pojos.TestReport;

@Service
public class LabServiceImpl implements ILabService {

	@Autowired
	LabRepository labRepo;
	@Autowired
	private TestReportRepository trRepo;
	@Autowired
	private MedicalTestRepository medTestRepo;

	@Override
	public TestPrescriptiondto fetchOneTestPrescription(Integer pId) {
		// TODO Auto-generated method stub
		TestPrescription test = labRepo.findByPatientId(pId,LocalDate.now());
		System.out.println("test: " + test.getTests());
		TestPrescriptiondto dto = new TestPrescriptiondto(test.getTests(), test.getPrescDate(),
				test.getPatient().getName(), test.getDoctor().getName());
		System.out.println("dto: " + dto);
		return dto;
	}

	@Override
	public TestReportDto saveReport(MultipartFile file, int tpId, int mtId) {
		String fileName = file.getOriginalFilename();
		MedicalTest mt = medTestRepo.findById(mtId).get();
		TestPrescription tp = labRepo.findById(mtId).get();
		try {
			TestReport report = new TestReport(fileName, file.getContentType(), file.getBytes(), tp, mt);
			trRepo.save(report);
			return new TestReportDto(report.getId(), fileName, report.getContentType(), report.getData(), tpId, mtId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public TestReport getReport(int trId) {
		return trRepo.findById(trId).get();
	}

}
