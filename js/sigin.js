import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";

    
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

    const signinForm = document.getElementById("signin-form");
    const googleSigninButton = document.getElementById("google-signin");
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    const closeModalBtn = document.getElementById("close-modal");
    const forgotPasswordLink = document.getElementById("forgot-password");

    
    function showModal(message, isError = false) {
      modalMessage.textContent = message;
      modalMessage.style.color = isError ? "red" : "green";
      modal.style.display = "flex";
    }

    
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    
    signinForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showModal("Error: Please enter a valid email address.", true);
        return;
      }

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          showModal("Sign-in successful! Welcome back, " + user.email);
          signinForm.reset();
          window.location.href = '../public/app.html';

        })
        .catch((error) => {
          showModal("Error: " + error.message, true);
        });
    });

    
    googleSigninButton.addEventListener("click", () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          showModal("Google sign-in successful! Welcome, " + user.displayName);
          window.location.href = '../public/app.html';

        })
        .catch((error) => {
          showModal("Error: " + error.message, true);
        });
    });

    
    forgotPasswordLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      const email = document.getElementById("email").value;

      if (!email) {
        showModal("Error: Please enter your email to reset your password.", true);
        return;
      }

      sendPasswordResetEmail(auth, email)
        .then(() => {
          showModal("Password reset email sent! Check your inbox.");
        })
        .catch((error) => {
          showModal("Error: " + error.message, true);
        });
    });