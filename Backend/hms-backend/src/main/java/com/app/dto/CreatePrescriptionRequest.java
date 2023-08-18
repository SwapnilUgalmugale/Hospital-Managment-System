package com.app.dto;

import java.util.ArrayList;
import java.util.List;

public class CreatePrescriptionRequest {
private Integer p_id;
private List<Integer> tests_id=new ArrayList<>();
public CreatePrescriptionRequest()
{
	System.out.println("in CreatePrescriptionRequest method");
}
public Integer getP_id() {
	return p_id;
}
public void setP_id(Integer p_id) {
	this.p_id = p_id;
}
public List<Integer> getTests_id() {
	return tests_id;
}
public void setTests_id(List<Integer> tests_id) {
	this.tests_id = tests_id;
}
@Override
public String toString() {
	return "CreatePrescriptionRequest [p_id=" + p_id + ", tests_id=" + tests_id + "]";
}

}
