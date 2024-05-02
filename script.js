//animation when scrolling
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    offset: 250, 
    duration: 1000,
	easing: 'ease-in-out',
    once: false,
  });
});

// Toggle Navigation Menu
function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

// Calculate Care Cost
function calculateCost() {
  const months = parseInt(document.getElementById('months').value);
  const foodCost = parseFloat(document.getElementById('foodCost').value);
  const medicalCost = parseFloat(document.getElementById('medicalCost').value);
  const otherCost = parseFloat(document.getElementById('otherCost').value);

  if (isNaN(months) || isNaN(foodCost) || isNaN(medicalCost) || isNaN(otherCost)) {
    alert('Please enter valid numbers for all fields.');
    return;
  }

  const petType = document.getElementById('petType').value;
  let baseCostPerMonth = 0;

  switch (petType) {
    case 'dog':
      baseCostPerMonth = 100;
      break;
    case 'cat':
      baseCostPerMonth = 80;
      break;
    case 'rabbit':
      baseCostPerMonth = 50;
      break;
    default:
      baseCostPerMonth = 0;
      break;
  }

  const totalBaseCost = baseCostPerMonth * months;
  const totalMonthlyCost = foodCost + medicalCost + otherCost;
  const totalCost = totalBaseCost + totalMonthlyCost;

  document.getElementById('totalCost').textContent = '$' + totalCost.toFixed(2);
}

// Adoption Inquiry
document.getElementById('adoptionForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const pet = formData.get('pet');
  const message = formData.get('message');

  const confirmationMessage = document.getElementById('confirmationMessage');
  confirmationMessage.style.display = 'block';
  this.reset();

  setTimeout(() => {
    confirmationMessage.style.display = 'none';
  }, 3000);
});


document.getElementById('adoptionForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const formData = new FormData(this);
  const name = formData.get('name');
  const pet = formData.get('pet');

  const inquiryMessageText = `Thank you, ${name}! Your inquiry for adopting a ${pet} has been received. We'll get back to you shortly.`;

  const inquiryModal = document.getElementById('inquiryModal');
  const inquiryMessage = document.getElementById('inquiryMessage');

  inquiryMessage.textContent = inquiryMessageText;
  inquiryModal.style.display = 'block'; 

  setTimeout(() => {
    closeInquiryModal(); 
  }, 3000);
});

function closeInquiryModal() {
  const inquiryModal = document.getElementById('inquiryModal');
  inquiryModal.style.display = 'none';
}

//email confirmation
function handleContactFormSubmit(event) {
  event.preventDefault(); 

  const successMessage = document.getElementById('successMessage');
  successMessage.style.display = 'block'; 

  document.getElementById('contactForm').reset();

  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 5000); 
}

function redirectToHomepage() {
      window.location.href = "index.html"; 
    }
	

//adopt pet
	
function adoptPet(petName, statusId) {
  const adoptionMessageText = `Congratulations! You have adopted ${petName}.`;

  const adoptionModal = document.getElementById('adoptionModal');
  const adoptionMessage = document.getElementById('adoptionMessage');

  adoptionMessage.textContent = adoptionMessageText;
  adoptionModal.style.display = 'block';

  setTimeout(() => {
    closeAdoptionModal();
  }, 3000);
}

function closeAdoptionModal() {
  const adoptionModal = document.getElementById('adoptionModal');
  adoptionModal.style.display = 'none';
}

