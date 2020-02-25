window.onload = init;

function init() {
	
	//Event for submit button
	var formsubmit = document.getElementById("submit");
	if (formsubmit) {
		formsubmit.onclick = checkForm;
		}
}

function checkForm() {	
	
	//gets input elelments
	var inputs = document.getElementsByTagName('input');
	// setting up var for check box and radio validation
	var checkedCB=false,checkedRadio=false;
	
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].type == 'checkbox' && inputs[i].checked) {
            checkedCB=true;
		}else if(inputs[i].type == 'radio' && inputs[i].checked) {
			checkedRadio=true;
		}
		//as long as one is true and the form is filled out it will move to the next page
		//if there is a subsription then its true and moves to next page
		if(checkedRadio){ return true;}
		// if you tick your a gym member then its true and moves to next page
		if(checkedCB){ return true;}
  }
  //message will pop up with an okay button if you havent picked a plan or gym member
  alert("You must select a subscription if not a gym member.");
  return false;
}
// Disable form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
	// Get the forms we want to add validation styles to
	var forms = document.getElementsByClassName('needs-validation');
	// Loop over them and prevent submission
	var validation = Array.prototype.filter.call(forms, function(form) {
	  form.addEventListener('submit', function(event) {
		if (form.checkValidity() === false) {
		  event.preventDefault();
		  event.stopPropagation();
		}
		form.classList.add('was-validated');
	  }, false);
	});
  }, false);
})();

// When Checkbox is ticked, subscription options dissappear
function valueChanged() {
	if($("#customCheck1").is(":checked"))   
		$("#subscription-options").hide();
	else
		$("#subscription-options").show();
};
// Tooltips appear when user hovers each field
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

