package com.app.dto;

import java.time.LocalDate;

public class AppointmentResponce {
	private Integer id;
    private LocalDate apptDate;
    public AppointmentResponce() {
		// TODO Auto-generated constructor stub
	}
	public AppointmentResponce(Integer id, LocalDate apptDate) {
		super();
		this.id = id;
		this.apptDate = apptDate;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public LocalDate getApptDate() {
		return apptDate;
	}
	public void setApptDate(LocalDate apptDate) {
		this.apptDate = apptDate;
	}
	@Override
	public String toString() {
		return "AppointmentResponce [id=" + id + ", apptDate=" + apptDate + "]";
	}
    
}
