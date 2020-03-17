<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<%@ include file="../include/header.jsp"%>
<%@ include file="../include/nav.jsp"%>

<section >
	<div align="center">
		<h3>회원가입 페이지</h3>
		<hr>
		<input type="email"  id="email" placeholder="이메일을 입력해 주세요" />
		<div id ="divEmail"></div>
		<input type="password"  id="pw" placeholder="비밀번호를 입력해 주세요" />
		<div id ="divPw"></div>
		<input type="password"  id="pw2" placeholder="비밀번호를 다시 입력해 주세요" />
		<div id ="divPw2"></div>
		<input type="text"  id="userName" placeholder="이름을 입력해주세요" />
		<div id ="divName"></div>
		<hr>
		<button id = "btnRegister">회원가입하기</button> 
		<button onclick="location.href = '/'">메인 화면으로</button>
	

	</div>

</section>
<script src="/resources/scripts/register.js"></script>
<%@ include file="../include/footer.jsp"%>