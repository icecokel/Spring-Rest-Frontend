<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="../include/header.jsp"%>
<%@ include file="../include/nav.jsp"%>
<section>

	<div align="center">
		<h3>로그인 페이지</h3>
		<br /> <input type="email" id="email" placeholder="이메일주소를 입력하세요" /> <br />
		<input type="password" id="password" placeholder="비밀번호를 입력하세요" /><br />

		<button onclick="loginClick()">로그인</button>
	</div>
	<div class="text-center">
		<a class="small" href="/user/forgotPassword">Forgot Password?</a>
	</div>
	<div class="text-center">
		<a class="small" href="/user/register">Create an Account!</a>
	</div>
</section>

<script src="/resources/scripts/login.js"></script>
<%@ include file="../include/footer.jsp"%>
