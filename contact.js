$(function(){$("#contact-form").validator();$("#contact-form").on("submit",function(b){if(!b.isDefaultPrevented())
	{var a="contact.php";$.ajax({type:"POST",url:a,data:$(this).serialize(),success:function(e){var d="alert-"+e.type;var 
		f=e.message;var c='<div class="alert '+d+' alert-dismissable"><button type="button" class="close" data-dismiss="alert"
		 aria-hidden="true">&times;</button>'+f+"</div>";if(d&&f){$("#contact-form").find(".messages").html(c);$("#contact-form")
		 [0].reset()}}});return false}})});
