const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
// Add this to your existing app.js file or create a new one
document.addEventListener('DOMContentLoaded', function() {
	const openModalButton = document.getElementById('openContactModal');
	const closeModalButton = document.getElementById('closeContactModal');
	const contactModal = document.getElementById('contactModal');
	const contactForm = document.getElementById('contactForm');
  
	// Open the modal when the button is clicked
	openModalButton.addEventListener('click', function() {
	  contactModal.style.display = 'block';
	});
  
	// Close the modal when the close button is clicked
	closeModalButton.addEventListener('click', function() {
	  contactModal.style.display = 'none';
	});
  
	// Close the modal when clicking outside the modal content
	window.addEventListener('click', function(event) {
	  if (event.target === contactModal) {
		contactModal.style.display = 'none';
	  }
	});
  
	// Submit the form data when the form is submitted
	contactForm.addEventListener('submit', function(event) {
	  event.preventDefault();
	  // You can add code here to send the form data using an API or other methods
	  // For simplicity, let's just log the form data to the console
	  console.log('Name:', contactForm.name.value);
	  console.log('Email:', contactForm.email.value);
	  console.log('Message:', contactForm.message.value);
	  // You can reset the form or close the modal here
	  // contactForm.reset();
	  // contactModal.style.display = 'none';
	});
  });
  
