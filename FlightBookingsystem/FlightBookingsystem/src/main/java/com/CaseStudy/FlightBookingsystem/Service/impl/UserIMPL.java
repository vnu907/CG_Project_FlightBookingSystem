package com.CaseStudy.FlightBookingsystem.Service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.CaseStudy.FlightBookingsystem.Dto.LoginDTO;
import com.CaseStudy.FlightBookingsystem.Dto.UserDTO;
import com.CaseStudy.FlightBookingsystem.Repo.UserRepo;
import com.CaseStudy.FlightBookingsystem.Response.LoginResponse;

import com.CaseStudy.FlightBookingsystem.Service.UserService;
import com.CaseStudy.FlightBookingsystem.Entity.User;


@Service
public class UserIMPL implements UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
    private PasswordEncoder passwordEncoder;

	
	public String addUser(UserDTO userDTO) {
		  User user = new User(

	                userDTO.getUserid(),
	                userDTO.getUsername(),
	                userDTO.getEmail(),

	               this.passwordEncoder.encode(userDTO.getPassword())
	        );

	        userRepo.save(user);

	        return user.getUsername();
	}


	@Override
	public LoginResponse loginUser(LoginDTO loginDTO) {
		
		   String msg = "";
	        User user1 = userRepo.findByEmail(loginDTO.getEmail());
	        if (user1 != null) {
	            String password = loginDTO.getPassword();
	            String encodedPassword = user1.getPassword();
	            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
	            if (isPwdRight) {
	                Optional<User> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
	                if (user.isPresent()) {
	                    return new LoginResponse("Login Success", true);
	                } else {
	                    return new LoginResponse("Login Failed", false);
	                }
	            } else {
	 
	                return new LoginResponse("password Not Match", false);
	            }
	        }else {
	            return new LoginResponse("Email not exits", false);
	        }
		
		
		
		
		
	}

}
