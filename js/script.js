$(document).ready(function(){
	$("#design").click(function(){
		$("#designInfo").show();
		$("#design").hide();
	});
	$("#designInfo").click(function(){
		$("#design").show();
		$("#designInfo").hide();
	});
	$("#development").click(function(){
		$("#developmentInfo").show();
		$("#development").hide();
	});
	$("#developmentInfo").click(function(){
		$("#development").show();
		$("#developmentInfo").hide();
	});
	$("#product").click(function(){
		$("#productInfo").show();
		$("#product").hide();
	});
	$("#productInfo").click(function(){
		$("#product").show();
		$("#productInfo").hide();
	});
});

$(document).ready(function(){
	$("#portfolio1").mouseenter(function(){
		$("#overlay1").show();
	}).mouseleave(function(){
		$("#overlay1").hide();
	});
	$("#portfolio2").mouseenter(function(){
		$("#overlay2").show();
	}).mouseleave(function(){
		$("#overlay2").hide();
	});
	$("#portfolio3").mouseenter(function(){
		$("#overlay3").show();
	}).mouseleave(function(){
		$("#overlay3").hide();
	});
	$("#portfolio4").mouseenter(function(){
		$("#overlay4").show();
	}).mouseleave(function(){
		$("#overlay4").hide();
	});
	$("#portfolio5").mouseenter(function(){
		$("#overlay5").show();
	}).mouseleave(function(){
		$("#overlay5").hide();
	});
	$("#portfolio6").mouseenter(function(){
		$("#overlay6").show();
	}).mouseleave(function(){
		$("#overlay6").hide();
	});
	$("#portfolio7").mouseenter(function(){
		$("#overlay7").show();
	}).mouseleave(function(){
		$("#overlay7").hide();
	});
	$("#portfolio8").mouseenter(function(){
		$("#overlay8").show();
	}).mouseleave(function(){
		$("#overlay8").hide();
	});
})
$("form").submit(function(event){
    event.preventDefault();
    var name = $("input#mce-NAME").val();
    var email = $("input#mce-EMAIL").val();
    var message = $("textarea#message").val();
    var myModal = new bootstrap.Modal(document.getElementById('modal'), {backdrop: true});
 
    if (name && email){
     // alert (name + ", we have received your message. Thank you for reaching out to us.");
      $("#modal-body").html(name + ", we have received your message. Thank you for reaching out to us.");
      $("#modalLabel").html("Message received");
      myModal.show();
    }
    else {
     // alert("Please enter your name and email!");
      $("#modal-body").html("Please enter your name and email!");
      $("#modalLabel").html("Invalid input!");
      myModal.show();
    }
});