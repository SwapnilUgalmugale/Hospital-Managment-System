package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "departments")
@Getter
@Setter

public class Department extends BaseEntity{
	
	@Column(length = 20)
	private String name;
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true,mappedBy = "department")
	private List<Employee> doctors=new ArrayList<Employee>();
	
	@OneToMany(mappedBy = "department",orphanRemoval = true )
	private List<AdmitPatient> admitPatients=new ArrayList<AdmitPatient>();//uni dir can't delte dept if patient is admitted
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public List<Employee> getDoctors() {
//		return doctors;
//	}
//	
//	public void setDoctors(List<Employee> doctors) {
//		this.doctors = doctors;
//	}
//	
//	public List<AdmitPatient> getAdmitPatients() {
//		return admitPatients;
//	}
//	public void setAdmitPatients(List<AdmitPatient> admitPatients) {
//		this.admitPatients = admitPatients;
//	}
	@Override
	public String toString() {
		return "Department id="+getId()+", name=" + name ;
	}

	
}
