package com.app.dto;

public class AcceptPaymentRequest {
	private int patientId;
	private int apptId;
	private double wardCharges;
	private  double testCharges;
	
	public AcceptPaymentRequest() {
		// TODO Auto-generated constructor stub
	}

	public AcceptPaymentRequest(int patientId, int apptId, double wardCharges, double testCharges) {
		super();
		this.patientId = patientId;
		this.apptId = apptId;
		this.wardCharges = wardCharges;
		this.testCharges = testCharges;
	}

	public int getPatientId() {
		return patientId;
	}

	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}

	public int getApptId() {
		return apptId;
	}

	public void setApptId(int apptId) {
		this.apptId = apptId;
	}

	public double getWardCharges() {
		return wardCharges;
	}

	public void setWardCharges(double wardCharges) {
		this.wardCharges = wardCharges;
	}

	public double getTestCharges() {
		return testCharges;
	}

	public void setTestCharges(double testCharges) {
		this.testCharges = testCharges;
	}

	@Override
	public String toString() {
		return "AcceptPaymentRequest [patientId=" + patientId + ", apptId=" + apptId + ", wardCharges=" + wardCharges
				+ ", testCharges=" + testCharges + "]";
	}
	
}
