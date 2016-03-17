$(document).ready(function(){
	$("#submitButton").click(function(){
		alert("hello inside function");
		var user = {
				emailAddress: $('#emailAddress').val(),
				password: $('#password').val()
		};

		alert("User.emailAddress : " + user.emailAddress);

		$.ajax({
			type: "POST",
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			url: "/LoginServiceProject/loginRest/login",
			data: JSON.stringify(user),
			success: function(response) {
				alert("Success" + response);
				window.location = "/LoginServiceUI/home.html";
			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert("Error");
			}
		});
	});
	
	$("#logoutButton").click(function() {
		window.location = "/LoginServiceUI/landingPage.html";
	})
});