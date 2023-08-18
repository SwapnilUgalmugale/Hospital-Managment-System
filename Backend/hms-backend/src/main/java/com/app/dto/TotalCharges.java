package com.app.dto;

public class TotalCharges {
	private double totalLabCharges;
	private double totalConsCharges;
	private double totalWardCharges;
	
	public TotalCharges() {
		// TODO Auto-generated constructor stub
	}
	public double getTotalLabCharges() {
		return totalLabCharges;
	}
	public void setTotalLabCharges(double totalLabCharges) {
		this.totalLabCharges = totalLabCharges;
	}
	public double getTotalConsCharges() {
		return totalConsCharges;
	}
	public void setTotalConsCharges(double totalConsCharges) {
		this.totalConsCharges = totalConsCharges;
	}
	public double getTotalWardCharges() {
		return totalWardCharges;
	}
	public void setTotalWardCharges(double totalWardCharges) {
		this.totalWardCharges = totalWardCharges;
	}
	public TotalCharges(double totalLabCharges, double totalConsCharges, double totalWardCharges) {
		super();
		this.totalLabCharges = totalLabCharges;
		this.totalConsCharges = totalConsCharges;
		this.totalWardCharges = totalWardCharges;
	}
	@Override
	public String toString() {
		return "TotalCharges [totalLabCharges=" + totalLabCharges + ", totalConsCharges=" + totalConsCharges
				+ ", totalWardCharges=" + totalWardCharges + "]";
	}
}
