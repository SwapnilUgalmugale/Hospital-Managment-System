package com.app.global_exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.cust_exce.AdminHandlerException;
import com.app.cust_exce.PrescriptionExceptionHandling;
import com.app.cust_exce.ReceptionistHandlerException;
import com.app.cust_exce.UserHandlingException;
import com.app.dto.ErrorResponse;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
	// exc handling method/s :
	@ExceptionHandler(UserHandlingException.class)
	public ResponseEntity<ErrorResponse> handleCustomerHandlingException(UserHandlingException e) {
		System.out.println("in handle custmoer exc");
		return new ResponseEntity<>(new ErrorResponse("Invalid Login", "Wrong Credentials"), HttpStatus.UNAUTHORIZED);
	}

	@ExceptionHandler(PrescriptionExceptionHandling.class)
	public ResponseEntity<ErrorResponse> handlePrescriptionExceptionHandling(PrescriptionExceptionHandling e){
		System.out.println("in presc handl excep");
		return new ResponseEntity<>(new ErrorResponse(e.getMessage(),"No prescription record"),HttpStatus.NOT_FOUND);
	}
	@ExceptionHandler(AdminHandlerException.class)
	public ResponseEntity<ErrorResponse> handleAdminHandlerException(AdminHandlerException e) {
		System.out.println("in handle admin exc");
		return new ResponseEntity<>(new ErrorResponse("Invalid employee id", e.getMessage()), HttpStatus.UNAUTHORIZED);
	}
	@ExceptionHandler(ReceptionistHandlerException.class)
	public ResponseEntity<ErrorResponse> handleReceptionistException(ReceptionistHandlerException e) {
		System.out.println("in handle admin exc");
		return new ResponseEntity<>(new ErrorResponse("Error in operation", e.getMessage()), HttpStatus.UNAUTHORIZED);
	}

}
