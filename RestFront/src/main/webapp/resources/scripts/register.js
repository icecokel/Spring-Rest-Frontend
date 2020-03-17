var email = document.getElementById("email");
var pw = document.getElementById("pw");
var pw2 = document.getElementById("pw2");
var userName = document.getElementById("userName");

var divEmail = document.getElementById("divEmail");
var divPw = document.getElementById("divPw");
var divPw2 = document.getElementById("divPw2");
var divName = document.getElementById("divName");

var checkEmail = false;
var checkPw = false;
var checkPw2 = false;

// 이메일 유효성 검사.
email.addEventListener("focusout", function(){
	let url = ""

	if(email.value.trim().length <1){
		checkEmail = false;
	}
	checkEmail = true;
//	$.ajax({
//		url : url,
//		data : email.value,
//		type : "get",
//		success : function(data) {
//			if (data.result == true) {
//				divEmail.innerText = "사용 가능한 이메일 입니다.";
//				divEmail.style.color = "green";
//				checkEmail = true;
//			} else {
//				divEmail.innerText = "이미 사용중이 이메일입니다.";
//				divEmail.style.color = "red";
//				divEmail.focus;
//				checkEmail = false;
//			}
//		}
//	});

})

// 비밀번호 유효성 검사 
pw.addEventListener("focusout", function(){
	let pwVal = pw.value.trim();
	
	if(pwVal.trim().length <1){
		checkPw = false;
	}
	
	let passRule = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

	if(pwVal.length < 9){
		divPw.innerHTML = "비밀번호는 숫자,영문,특수 문자 포함 9자 이상 이여야 합니다.";
		divPw.style.color = "red";
		checkPw = false;
	}
	
	
	if (passRule.test(pwVal)) {
		divPw.innerHTML = "이 비밀번호는 사용하실 수 있습니다.";
		divPw.style.color = "green";
		checkPw = true;
	
	} else {
		divPw.innerHTML = "비밀번호는 숫자,영문,특수 문자 포함 9자 이상 이여야 합니다.";
		divPw.style.color = "red";
		checkPw = false;
		
	}
})

pw2.addEventListener("focusout", function(){
	
	let pwVal = pw.value.trim();
	let pw2Val = pw2.value.trim();
	
	if(pw2Val.trim().length <1){
		checkPw = false;
	}
	
	if (pwVal == pw2Val){
		divPw2.innerHTML = "비밀번호가 일치 합니다.";
		divPw2.style.color = "green";
		checkPw2 = true;
	}else{
		divPw2.innerHTML = "비밀번호가 일치 하지 않습니다.";
		divPw2.style.color = "red";
		checkPw2 = false;
	}
})

var btnRegister = document.getElementById("btnRegister");

btnRegister.addEventListener("click" , function(){
	
	console.log(checkEmail);
	console.log(checkPw);
	console.log(checkPw2);
	
	if(!checkEmail){
		divEmail.innerHTML = "이메일을 확인해 주세요.";
		divEmail.style.color = "red";
		divEmail.focus;
		e.preventDefault();
		return ;
	}
	
	if(!checkPw || !checkPw2){
		divPw.innerHTML = "비밀번호를 확인해 주세요";
		divPw.style.color = "red";
		e.preventDefault();
		return;
	}
	
	if(userName.value.trim().length < 1){
		divName.innerHTML = "이름을 확인해 주세요";
		divName.style.color = "red";
		e.preventDefault();
		return;
	}
	let url = "";
	
	
	
	let user = {
		"name" : userName.value,
		"passwd" : pw.value,
		"email" : email.value
	}
	
	let data = JSON.stringify(user);
	


	console.log(data);
//	$.ajax({
//		url : url,
//		data : data,
//		type : "post",
//		contentType : "application/json; charset=UTF-8",
//		success : function(data){
//			console.log(data)
//			if(data.result == 1){
//				alert("회원가입 성공");
//				location.href = "/user/login";
//			}else{
//				alert("회원가입 실패")
//			}
//		},error :function(error){
//			console.log(error);
//		}
//		
//	})

})
