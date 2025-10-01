let PatientDetails = [];

function GoLoginPage() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let repeatpassword = document.getElementById("repeat-password")?.value.trim();
  const checkbox = document.getElementById("terms");
  // localStorage.removeItem("PatientDetails");
  let existingData = JSON.parse(localStorage.getItem("PatientDetails")) || [];
  let emailExists = existingData.some(user => user.email === email);

  if (!email || !password || !repeatpassword) {
    alert("Please fill all fields.");

  }else if (password !== repeatpassword) {
    alert("Passwords do not match!");

  }else if (!checkbox.checked) {
    alert("Please accept the terms and conditions.");

  } else if (emailExists) {
    alert("This email is already registered. Please use a different email.");
    
  } else{

  let existingData = JSON.parse(localStorage.getItem("PatientDetails")) || [];

  existingData.push({
    email: email,
    password: password,
    repeatpassword: repeatpassword
  });

  localStorage.setItem("PatientDetails", JSON.stringify(existingData));

  alert("Account created successfully!");

   window.location.href = "login.html"; 
}
}




















    
    

  

