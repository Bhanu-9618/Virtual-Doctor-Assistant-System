
const API_KEY = "_API_KEY_"; 
const MODEL = "gemini-1.5-flash"; 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;


async function ShowResult(event) {
  event.preventDefault(); 


  let symptoms = document.getElementById("checksymptoms").value.trim();
  let output = document.getElementById("output");


  if (!symptoms) {
    output.style.display = "block";
    output.innerHTML = "Please enter your symptoms.";
    return;
  }


  output.style.display = "block";
  output.innerHTML = "Analyzing your symptoms...";

  try {

    let response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a medical assistant (not a doctor). Explain these symptoms and suggest possible conditions: ${symptoms}`
          }]
        }]
      })
    });


    let data = await response.json();
    let aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";


    output.innerHTML = aiText.replace(/\n/g, "<br>");
  } 
  catch (err) {
    output.innerHTML = "❌ Error: " + err.message;
  }
}

window.ShowResult = ShowResult;
