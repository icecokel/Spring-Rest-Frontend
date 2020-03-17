<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a class="navbar-brand" href="#">Tab Bar</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse"
		data-target="#navbarSupportedContent"
		aria-controls="navbarSupportedContent" aria-expanded="false"
		aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>

	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav mr-auto">
			<li class="nav-item dropdown"><a
				class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
				role="button" data-toggle="dropdown" aria-haspopup="true"
				aria-expanded="false"> User </a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<c:if test="${user == null}">
						<a class="dropdown-item" href="/user/login">로그인</a>
						<a class="dropdown-item" href="/user/register">회원가입</a>
						<a class="dropdown-item" href="/user/forgotPassword">비밀번호 찾기</a>
					</c:if>
					
					<c:if test="${user != null}">
					
					<a class="dropdown-item" href="/user/profile">로그아웃</a> 
					<a class="dropdown-item" onclick="logout()">로그아웃</a> 
					</c:if>
					
	
				</div></li>

		</ul>

		<!--     <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
	</div>
</nav>
<hr />


<script>
	var logout = function(){
		
		$.ajax({
			url:"/user/logout",
			type:"post",
			success :function(){
				alert("로그아웃이 되었습니다.")
			}
		});
		
	}

</script>