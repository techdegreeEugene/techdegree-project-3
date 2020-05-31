
document.getElementById("name").focus(); //When the page first loads, the first text field should be in focus by default.
//Name field can't be blank.

document.getElementById("name").addEventListener("blur", (event) => { 
	if (document.getElementById("name").value === "")
	{
		document.querySelector("#name").style.borderColor = "red";		
	} else {
		document.querySelector("#name").style.borderColor = "blue";		
	}
}); 

//Email field must be a validly formatted e-mail address
let email = document.getElementById("mail");

email.addEventListener("blur", (event) => {
if (email.value.indexOf("@")>1 && email.value.lastIndexOf(".")>email.value.indexOf("@"))
	{ email.style.borderColor = "blue";	
}
else if (email.value === "") {
	email.style.borderColor = "red";		
}
else
{
	email.style.borderColor = "red";		
}
});





//Give the field an id of “other-title,” and add the placeholder text of "Your Job Role".
const fieldsetBasic = document.querySelector("#name").parentNode;
fieldsetBasic.name = "basic";
const jobRoleOther =  fieldsetBasic.lastElementChild;
const jobRoleOtherInput = document.getElementById("other-title");
jobRoleOtherInput.placeholder= "Your Job Role";
jobRoleOtherInput.style.display = "none";
jobRoleOtherInput.previousElementSibling.style.display="none";	

//"Your job role" text field appears when user selects "Other" from the Job Role menu.

document.getElementById("title").addEventListener("change", (event) => {
	let jobRole = event.target.value;
	if(jobRole == "other") {
		jobRoleOtherInput.style.display = "block";
		jobRoleOtherInput.previousElementSibling.style.display="block";	
	} else {
		jobRoleOtherInput.style.display = "none";
		jobRoleOtherInput.previousElementSibling.style.display="none";

	}

})


//Until a theme is selected from the “Design” menu, no color options appear in the “Color” 
//drop down and the “Color” field reads “Please select a T-shirt theme”.

const designDrop = document.querySelector("#design");
const colorDrop = document.querySelector(".colors");
const colorDropChoices = document.querySelectorAll(".colors option");
colorDrop.style.visibility = "hidden";
designDrop.addEventListener("change", (event) => {
   let dropVal = event.target.value;
   if (dropVal !== "Select Theme") {
   	 colorDrop.style.visibility = "visible";

   } else {
	colorDrop.style.visibility = "hidden"
	} ;
   })

designDrop.addEventListener("change", (event) => {
	let dropVal = event.target.value;
		if (dropVal === "js puns") {
		colorDropChoices[3].style.display = "none";
		colorDropChoices[4].style.display = "none";
		colorDropChoices[5].style.display = "none";
		colorDropChoices[0].style.display = "block";
		colorDropChoices[1].style.display = "block";
		colorDropChoices[2].style.display = "block";
	} else if (dropVal === "heart js") {
		colorDropChoices[0].style.display = "none";
		colorDropChoices[1].style.display = "none";
		colorDropChoices[2].style.display = "none";
		colorDropChoices[3].style.display = "block";
		colorDropChoices[4].style.display = "block";
		colorDropChoices[5].style.display = "block";
		
		
	}
});

//If the user selects a workshop, don't allow selection of a workshop at the same day and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
//When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
//Code borrowed from Treehouse FSJS Techdegree - Project Warm Up
// Checkboxes - JS
// Developed by: Robert Manolis - Student Success Specialist

const checkboxes = document.querySelectorAll(".activities input");
document.querySelector('.activities').addEventListener('change', (e) => {
	const clicked = event.target;
	const clickedType = clicked.getAttribute("data-day-and-time");
	// console.log(clicked);
	// console.log(clickedType);
	for(let i=0;i<checkboxes.length;i++) {
		let checkboxType = checkboxes[i].getAttribute("data-day-and-time");
		if (checkboxType === clickedType && clicked !== checkboxes[i]) {
			if (clicked.checked) {
        	checkboxes[i].disabled = "true";
        	 } else {
        	checkboxes[i].disabled = "false";
		       }
		    }
		 }
});

//User must select at least one checkbox under the "Register for Activities" section of the form.
// document.querySelector("#payment").addEventListener("change", (event) => {
document.querySelector('.activities').addEventListener('submit', (e) => {
	let checkedBox = 0;
	for(let i=0;i<checkboxes.length;i++) {
		
		if (checkboxes[i].checked) {
			checkedBox += 1;
			}
		} 

		if (checkedBox === 0) {
			document.querySelector(".activities legend").innerText = "Register for Activities - You must choose an Activity";
		} else { document.querySelector(".activities legend").innerText = "Register for Activities" 
	}	
});

//As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.
let activitiesTotal = 0;
let h1a = document.createElement("h1");
document.querySelector('.activities').appendChild(h1a);

document.querySelector('.activities').addEventListener('change', (e) => {
	const clicked1 = event.target;
	const clickedCost = clicked1.getAttribute("data-cost");
	console.log(clickedCost);
		if (clicked1.checked) {
		activitiesTotal += parseInt(clickedCost);
		}	else {activitiesTotal -= parseInt(clickedCost)
		};
	console.log(activitiesTotal);
	h1a.innerText = "Total: $" + activitiesTotal;
});

//The "Credit Card" payment option should be selected by default. 
const cc = document.querySelector(".credit-card");
const paypal = document.querySelector(".paypal");
const bitcoin = document.querySelector(".bitcoin");

document.querySelector("#payment").selectedIndex = "1";
paypal.style.display = "none";
bitcoin.style.display = "none";
//Display the #credit-card div, and hide the "PayPal" and "Bitcoin" information. Payment option in the select menu should match the payment option displayed on the page.

document.querySelector("#payment").addEventListener("change", (event) => {
	let payment = event.target.value;
	
	if (payment === "credit card") {
 	paypal.style.display = "none";
 	bitcoin.style.display = "none";
 	cc.style.display = "block";
	} 
//When a user selects the "PayPal" payment option, the PayPal information should display, and the credit card and “Bitcoin” information should be hidden.
	else if (payment === "paypal") {
	cc.style.display = "none";
 	bitcoin.style.display = "none";
	paypal.style.display = "block";
	} 
//When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.

	else if (payment === "bitcoin") {
	paypal.style.display = "none";
 	cc.style.display = "none";
	bitcoin.style.display = "block";
	} else {
//The user should not be able to select the "Select Payment Method" option from the payment select menu, because the user should not be able to submit the form without a chosen payment option.
		event.preventDefault();
		alert("Please choose a payment method");
	};
});







