package com.rest.front;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

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
	
	@PostMapping("/user/logout")
	public void logout(HttpServletRequest request) {
		
		request.getSession().invalidate();

	}
	
	@GetMapping("/user/profile")
	public String profile(Model model) {
		
		
		return "user/profile";
	}
	

	
}
