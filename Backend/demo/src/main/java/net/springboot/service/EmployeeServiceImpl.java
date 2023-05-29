package net.springboot.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.springrestjpa.repository.EmployeeRepository;

public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public List<com.springrestjpa.entity.Employee> getAllEmployees() {
		
		return employeeRepository.findAll();
	}

	
}
