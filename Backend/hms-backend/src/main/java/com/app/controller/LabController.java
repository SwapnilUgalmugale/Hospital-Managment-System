package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.TestReport;
import com.app.service.ILabService;

@CrossOrigin
@RestController
@RequestMapping("/lab")
public class LabController {

	@Autowired
	private ILabService labSer;

	@GetMapping("/viewTestPresc/{pId}")
	public ResponseEntity<?> DisplayTestPriscription(@PathVariable Integer pId) {
		return new ResponseEntity<>(labSer.fetchOneTestPrescription(pId), HttpStatus.OK);
	}
	
	@PostMapping("/uploadReport/{tpId}/{mtId}")
	public ResponseEntity<?> uploadReport(@RequestParam("report") MultipartFile file, @PathVariable int tpId, @PathVariable int mtId) {
		return new ResponseEntity<>(labSer.saveReport(file, tpId, mtId), HttpStatus.OK);
	}
	@GetMapping("/downloadReport/{trId}")
	public ResponseEntity<?> downloadReport(@PathVariable int trId){
		TestReport report = labSer.getReport(trId);
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(report.getContentType()))
				.header(HttpHeaders.CONTENT_DISPOSITION,"attachment:filename=\""+report.getName()+"\"")
				.body(new ByteArrayResource(report.getData()));
	}
}
