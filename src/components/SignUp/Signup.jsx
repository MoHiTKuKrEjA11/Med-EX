import React, { useState } from 'react';

function UserRegistration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // You can add Firebase authentication logic here
    const firebaseConfig = {
        apiKey: "AIzaSyAgXxx0ZuE8LzvauL0Mr7bC67Jpd7qDQSE",
        authDomain: "med-ex-c6fa5.firebaseapp.com",
        projectId: "med-ex-c6fa5",
        storageBucket: "med-ex-c6fa5.appspot.com",
        messagingSenderId: "814620439445",
        appId: "1:814620439445:web:005cf00913b93980f4bc9c",
        measurementId: "G-0FZX576820"
      };
    
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
    
            const auth = firebase.auth();
    
            document.getElementById("btn").addEventListener("click", function() {
                const eemail = document.getElementById("eemail").value;
                const l2password = document.getElementById("l2password").value;
    
                // For new registration
                auth.createUserWithEmailAndPassword(eemail, l2password)
                    .then((userCredential) => {
                        // Registration successful
                        const user = userCredential.user;
                        console.log(user);
                        alert("Registration successfully!!");
                        setTimeout(function() {
                            window.location.replace("check.html");
                        }, 1000);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage);
                        alert(errorMessage);
                    });
            });
  };

  return (
    <div className="container">
      <div className="con1">
        <div className="vcare">
          <h1>
            Welcome To <span style={{ color: 'red' }}>V</span>care
          </h1>
        </div>
        <div className="imgdct">
          <img src="doct.jpg" alt="" />
        </div>
      </div>
      <div className="con2">
        <div className="userreg">
          <h1>
            <span style={{ color: 'red' }}>U</span>ser{' '}
            <span style={{ color: 'red' }}>R</span>egistration
          </h1>
        </div>
        <div className="detailsec">
          <p>
            Already have an account?{' '}
            <a href="/User_signup/Sign.html" id="login">
              Sign In
            </a>
          </p>
          <div id="form">
            <label htmlFor="name" id="nlabel">
              Name
            </label>{' '}
            <br />
            <input
              type="text"
              id="fname"
              placeholder="Lucifer Henry"
              autoComplete="off"
            />{' '}
            <br />
            <label htmlFor="phone" id="plabel">
              Phone no.
            </label>{' '}
            <br />
            <input
              type="phone"
              id="ephone"
              placeholder="12***9"
              autoComplete="off"
            />{' '}
            <br />
            <label htmlFor="email" id="elabel">
              Email
            </label>{' '}
            <br />
            <input
              type="email"
              id="eemail"
              placeholder="Lucifer@gmail.com"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{' '}
            <br />
            <label htmlFor="state" id="olabel">
              State
            </label>{' '}
            <br />
            <select name="state" id="state" className="form-control">
              <option value="N/A"></option>
              {/* Add state options here */}
            </select>
            <br />
            <label htmlFor="city" id="clabel">
              City
            </label>{' '}
            <br />
            <input type="city" name="city" id="qlabel" />
            <br />
            <label htmlFor="password" id="plabel">
              Create Password
            </label>{' '}
            <br />
            <input
              type="password"
              name="password"
              id="lpassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{' '}
            <br />
            <label htmlFor="password" id="plabel">
              Confirm Password
            </label>{' '}
            <br />
            <input type="password" name="password" id="l2password" />
            <br />
            <button id="btn" onClick={handleSignUp}>
              Sign Up
            </button>
            <a href="index.html">
              <button>View</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
