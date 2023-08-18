package com.app.service;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.TestPrescriptiondto;
import com.app.dto.TestReportDto;
import com.app.pojos.TestReport;

public interface ILabService {
	TestPrescriptiondto fetchOneTestPrescription(Integer pId);

	TestReportDto saveReport(MultipartFile file, int tpId, int mtId);

	TestReport getReport(int trId);
}
