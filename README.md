# 🩺 Virtual Doctor Assistant

A smart web-based application that helps users identify potential diseases based on their symptoms and provides relevant medical guidance.

---

## 🚀 Features

- **Symptom Analysis:** Input your symptoms and receive possible disease predictions.  
- **Disease Information:** Detailed description, causes, and treatment suggestions.  
- **User-Friendly Interface:** Clean and intuitive UI for seamless interaction.  
- **AI-Powered Recommendations:** Uses Google AI Studio for intelligent health insights.  
- **User Authentication (Signup / Signin):**  
  - Secure registration with email and password.  
  - Users must create an account to access features.  
  - Session-based login for a personalized experience.  

---

## 💻 Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Flowbite (Tailwind UI framework)  
- **AI Integration:** Google AI Studio  
- **Authentication:** Custom email/password authentication (JavaScript)  

---

## 🔐 Authentication Flow

1. **Signup:**  
   - User enters email + password to create an account.  
   - Data stored securely in local storage.  

2. **Signin:**  
   - Returning users can log in with credentials.  
   - Access to chatbot features only after successful authentication.  

3. **Session Management:**  
   - Keeps users logged in until they log out.  
