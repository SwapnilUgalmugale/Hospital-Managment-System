package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.service.IUserService;
@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	IUserService userService;

	@PostMapping("/login")
	public ResponseEntity<?> processLoginForm(@RequestBody LoginRequest request) {
		
			return new ResponseEntity<>(userService.authenticateUser(request.getEmail(), request.getPassword()), HttpStatus.OK);
	}
}
