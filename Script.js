function showLogin() {
    document.getElementById("auth-form-container").innerHTML = `
      <form id="loginForm">
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    `;
  }
  
  function showSignup() {
    document.getElementById("auth-form-container").innerHTML = `
      <form id="signupForm">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    `;
  }
  