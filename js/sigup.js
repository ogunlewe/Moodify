// Import required functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";

// Firebase configuration for your project
const firebaseConfig = {
  apiKey: "AIzaSyBi-UshYYIJNRJOcPeXJdR2_1hAdz8GNNY",
  authDomain: "moodify-a3631.firebaseapp.com",
  projectId: "moodify-a3631",
  storageBucket: "moodify-a3631.appspot.com",
  messagingSenderId: "1044981213787",
  appId: "1:1044981213787:web:b944391c4c50ab898a6d7e",
  measurementId: "G-FTNKG8HH7L"
};

const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const analytics = getAnalytics(app);

    const signupForm = document.getElementById("signup-form");
    const googleSignupButton = document.getElementById("google-signup");
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    const closeModalBtn = document.getElementById("close-modal");

    // Function to show modal with a message
    function showModal(message, isError = false) {
      modalMessage.textContent = message;
      modalMessage.style.color = isError ? "red" : "green";
      modal.style.display = "flex";
    }

 
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          showModal("Signup successful! Welcome, " + user.email);
          signupForm.reset();
          window.location.href = '../public/index.html';

        })
        .catch((error) => {
          showModal("Error: " + error.message, true);
        });
    });


    googleSignupButton.addEventListener("click", () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          showModal("Google signup successful! Welcome, " + user.displayName);
          window.location.href = '../public/index.html';

        })
        .catch((error) => {
          showModal("Error: " + error.message, true);
        });
    });




    