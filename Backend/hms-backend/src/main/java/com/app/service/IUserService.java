package com.app.service;

import com.app.pojos.Employee;

public interface IUserService {
	Employee authenticateUser(String email,String password);
}
