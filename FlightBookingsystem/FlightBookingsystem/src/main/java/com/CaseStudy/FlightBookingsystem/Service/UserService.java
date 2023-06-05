package com.CaseStudy.FlightBookingsystem.Service;

import com.CaseStudy.FlightBookingsystem.Dto.LoginDTO;
import com.CaseStudy.FlightBookingsystem.Dto.UserDTO;
import com.CaseStudy.FlightBookingsystem.Response.LoginResponse;


public interface UserService {

	String addUser(UserDTO userDTO);

	LoginResponse loginUser(LoginDTO loginDTO);

}
