package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="test_reports")
@Getter
@Setter
@NoArgsConstructor
public class TestReport extends BaseEntity{
	private String name;
	private String contentType;
	
	@Lob
	private byte[] data;
	
	@ManyToOne
	@JoinColumn(name="test_presc_id")
	@JsonIgnoreProperties("tests")
	private TestPrescription testPresc;
	
	@OneToOne
	@JoinColumn(name="med_test_id")
	@JsonIgnoreProperties({"testPresc"})
	private MedicalTest medTest;
	
//	public TestReport() {
//		// TODO Auto-generated constructor stub
//	}

	public TestReport(String name, String contentType, byte[] data, TestPrescription test_presc, MedicalTest medTest) {
		super();
		this.name = name;
		this.contentType = contentType;
		this.data = data;
		this.testPresc = test_presc;
		this.medTest = medTest;
	}

//	public MedicalTest getMedTest() {
//		return medTest;
//	}
//
//	public void setMedTest(MedicalTest medTest) {
//		this.medTest = medTest;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public String getContentType() {
//		return contentType;
//	}
//
//	public void setContentType(String contentType) {
//		this.contentType = contentType;
//	}
//
//	public byte[] getData() {
//		return data;
//	}
//
//	public void setData(byte[] data) {
//		this.data = data;
//	}
//
//	public TestPrescription getTest_presc() {
//		return testPresc;
//	}

//	public void setTest_presc(TestPrescription test_presc) {
//		this.testPresc = test_presc;
//	}
//	
}
