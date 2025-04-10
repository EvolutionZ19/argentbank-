import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFirstName } from "../../store/userReducer";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

/**
 * Page de connexion de l'utilisateur.
 */
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.body.token;
        localStorage.setItem("authToken", token);

        const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const profileData = await profileResponse.json();

        if (profileResponse.ok) {
          dispatch(setFirstName(profileData.body.firstName));
          navigate("/profile");
        } else {
          console.error("Erreur récupération profil :", profileData.message);
        }
      } else {
        console.error("Erreur de connexion :", data.message);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  return (
    <div className="container-login">
      <Header />
      <main className="main bg-dark-login">
        <section className="login-content">
          <i className="fa fa-user-circle login-icon"></i>
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="tony@stark.com"
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

            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button type="submit" className="login-button">Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
