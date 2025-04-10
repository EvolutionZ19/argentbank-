import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

/**
 * Page de création de compte
 */
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, firstName, lastName }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Utilisateur créé :", data);
        navigate("/login");
      } else {
        console.error("❌ Erreur d'inscription :", data.message);
      }
    } catch (error) {
      console.error("❌ Erreur réseau :", error);
    }
  };

  return (
    <main className="main bg-dark-signup">
      <section className="login-content">
        <i className="fa fa-user-circle login-icon"></i>
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="ex: tony@stark.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="firstName">Firstname</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="lastName">Lastname</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">Créer un compte</button>
          <a href="/login" className="login-button">Retour</a>
        </form>
      </section>
    </main>
  );
}

export default SignUp;
