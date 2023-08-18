package com.app.dto;

import javax.persistence.Lob;

public class TestReportDto {
	private int id;
	private String name;
	private String contentType;
	
	@Lob
	private byte[] data;
	
	private int testPrescId;
	
	private int medTestId;
	
	public TestReportDto() {
		// TODO Auto-generated constructor stub
	}


	public TestReportDto(int id, String name, String contentType, byte[] data, int testPrescId, int medTestId) {
		super();
		this.id = id;
		this.name = name;
		this.contentType = contentType;
		this.data = data;
		this.testPrescId = testPrescId;
		this.medTestId = medTestId;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public int getTestPrescId() {
		return testPrescId;
	}

	public void setTestPrescId(int testPrescId) {
		this.testPrescId = testPrescId;
	}

	public int getMedTestId() {
		return medTestId;
	}

	public void setMedTestId(int medTestId) {
		this.medTestId = medTestId;
	}

	
	
}
