package com.rest.front;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

	
	@GetMapping("/user/register")
	public String register(Model model) {
		
		return "user/register";
	}
	
	@GetMapping("/user/login")
	public String login(Model model) {
	
		
		return "user/login";
	}

	@GetMapping("/user/forgotPassword")
	public String forgotPassword(Model model) {
		
		return "user/forgotPassword";
	}
	

	
}
