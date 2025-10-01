function GoSearchPage() {
  let email = document.getElementById("emaillog").value.trim();
  let password = document.getElementById("passwordlog").value.trim();

  if (!email || !password) {
    alert("Please fill all fields.");
    return;
  }

  let existingData = JSON.parse(localStorage.getItem("PatientDetails")) || [];


  let matchedUser = existingData.find(user => user.email === email && user.password === password);

  if (!matchedUser) {
    alert("Invalid email or password. Please sign up or check your details.");
  } else {
    
    alert("Login successful!");
    window.location.href = "search.html";
  }
}
