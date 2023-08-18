package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.cust_exce.UserHandlingException;
import com.app.dao.UserRepository;
import com.app.pojos.Employee;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	UserRepository userRepo;

	@Override
	public Employee authenticateUser(String email, String password) {

		return userRepo.findByEmailAndPassword(email, password)
				.orElseThrow(()->new UserHandlingException("Invalid Credentials"));
	}
}
