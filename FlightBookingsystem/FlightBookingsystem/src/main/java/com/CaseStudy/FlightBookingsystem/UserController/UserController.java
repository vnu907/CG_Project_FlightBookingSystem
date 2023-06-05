package com.CaseStudy.FlightBookingsystem.UserController;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CaseStudy.FlightBookingsystem.Dto.LoginDTO;
import com.CaseStudy.FlightBookingsystem.Dto.UserDTO;
import com.CaseStudy.FlightBookingsystem.Response.LoginResponse;
import com.CaseStudy.FlightBookingsystem.Service.UserService;


@RestController
@CrossOrigin
@RequestMapping("/api/v1/user")
public class UserController {

	
	@Autowired
	private UserService userService;
	
	
	
	@PostMapping(path="/save")
	public String saveUser(@RequestBody UserDTO userDTO) {
		String id=userService.addUser(userDTO);
		return id;
	}
	
	@PostMapping(path="/login")
	public ResponseEntity<?>loginUser(@RequestBody LoginDTO loginDTO) {
		LoginResponse loginResponse=userService.loginUser(loginDTO);
		return ResponseEntity.ok(loginResponse);
	}
	
	
	
	
	
	
	
	
}




