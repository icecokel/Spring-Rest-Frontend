package com.rest.front;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rest.front.domain.Users;

@RestController
public class RestUserController {
	
	@PostMapping("/user/login")
	public Map<String,Object> login (HttpServletRequest request) {
		System.out.println("FrontEndServer : /user/login : POST");
		
//		request안에 모든 데이터 확인하기.		
		
//		Enumeration params = request.getParameterNames();
//		System.out.println("----------------------------");
//		while (params.hasMoreElements()){
//		    String name = (String)params.nextElement();
//		    System.out.println(name + " : " +request.getParameter(name));
//		}
//		System.out.println("----------------------------");
		
		Users user = new Users();
		user.setEmail(request.getParameter("email"));
		user.setName(request.getParameter("name"));
		int id = Integer.parseInt(request.getParameter("users_id"));
		user.setUsers_id(id);

		request.getSession().setAttribute("user", user);
		System.out.println(user.toString());
		
		
		Map<String , Object> map = new HashMap<>();
		
		map.put("result", "true");
		
		return map;
		

	}
	
}
