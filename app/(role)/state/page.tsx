<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Glassmorphism Login Page</title>
  <style>
    /* Import Google Font */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(270deg, #ff6ec4, #7873f5, #4facfe);
      background-size: 600% 600%;
      animation: gradientMove 12s ease infinite;
    }

    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .login-box {
      position: relative;
      width: 350px;
      padding: 2rem;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      text-align: center;
    }

    .login-box h2 {
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    .input-group {
      position: relative;
      margin-bottom: 1.5rem;
    }

    .input-group input {
      width: 100%;
      padding: 10px 15px;
      border-radius: 10px;
      border: none;
      outline: none;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      font-size: 1rem;
      transition: 0.3s;
    }

    .input-group input::placeholder {
      color: rgba(255,255,255,0.7);
    }

    .input-group input:focus {
      background: rgba(255, 255, 255, 0.3);
    }

    .login-btn {
      width: 100%;
      padding: 10px 15px;
      border: none;
      border-radius: 10px;
      background: rgba(255,255,255,0.3);
      color: white;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s;
    }

    .login-btn:hover {
      background: rgba(255,255,255,0.5);
    }

    .options {
      margin-top: 1rem;
      font-size: 0.9rem;
    }

    .options a {
      color: #fff;
      text-decoration: none;
      font-weight: 500;
    }

    .options a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="login-box">
    <h2>Login</h2>
    <form id="loginForm">
      <div class="input-group">
        <input type="text" id="username" placeholder="Username" required />
      </div>
      <div class="input-group">
        <input type="password" id="password" placeholder="Password" required />
      </div>
      <button type="submit" class="login-btn">Sign In</button>
    </form>
    <div class="options">
      <a href="#">Forgot Password?</a> | <a href="#">Sign Up</a>
    </div>
  </div>

  <script>
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if(username && password) {
        alert(`Welcome, ${username}!`);
      } else {
        alert('Please enter both username and password.');
      }
    });
  </script>
</body>
</html>
