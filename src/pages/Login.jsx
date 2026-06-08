import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-card">
          <h1>Login</h1>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Enter your password"
          />

          <button>Login</button>
        </div>
      </div>
    </>
  );
}

export default Login;