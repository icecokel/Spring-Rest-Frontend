var loginClick = function() {

	let email = document.getElementById("email");
	let passwd = document.getElementById("password");
	
	var data={
		"email" : email.value,
		"passwd" : passwd.value
	}
	
	let object = JSON.stringify(data);

	
	$.ajax({
		contentType : 'application/json; charset=UTF-8',
		url : 'http://localhost:8090/user/login',
		data : object,
		type : 'POST',
		
		success : function(data) {
			if(data.result == 1){
				
				loginSuccess(data.user);
				
			}else{
				alert("로그인을 실패 했습니다.")
				email.value="";
				passwd.value="";
				email.focus();
				
			}
		},
		error : function(){
			console.log("error");
		}
	})
} 

var loginSuccess = function(user){

	$.ajax({
		url:"/user/login",
		type :"post",
		dataType:"json",
		data : user,
		success : function(data){
			console.log(data);
			
			if(data.result == "true"){
				location.href="/";
			}
		},
		error : function(err){
			console.log(err);
		}
	});
	
}