const myButton = document.getElementById("signup");

function validateForm() {
  const role = document.forms["signup"]["role"].value;
  if (role === "") {
    alert("Please select a role");
    return false;
  }

  const requiredInputs = document.querySelectorAll('input[required]');
  for (let i = 0; i < requiredInputs.length; i++) {
    if (requiredInputs[i].value === '') {
      requiredInputs[i].classList.add('invalid');
      return false;
    }
  }

  return true;
}

function redirectToPage() {
  const selectedRole = document.querySelector('input[name="role"]:checked');

  if (selectedRole) {
    const roleValue = selectedRole.value;
    if (roleValue === 'secretaire') {
      window.location.href = 'garde.html';
    } else if (roleValue === 'medecin') {
      window.location.href = 'garde.html';
    } else if (roleValue === 'patient') {
      window.location.href = 'garde.html';
    }
  } else {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = 'Please select a role';
  }
}

document.addEventListener("DOMContentLoaded", function() {
    let myButton = document.getElementById("signup");
  
    myButton.addEventListener('click', function(event) {
      if (!validateForm()) {
        event.preventDefault();
      } else {
        redirectToPage();
      }
    });
  });
