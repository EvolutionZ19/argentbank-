import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import logInMiddleware from "../../redux/middleware/logInMiddleware";
import "./Login.css";

/**
 * Page de connexion utilisateur.
 */
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isConnected = useSelector((state) => state.user.isConnected);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * Envoi du formulaire : déclenche le middleware de connexion.
   */
  const onSubmit = (data) => {
    dispatch(logInMiddleware(data));
  };

  /**
   * Redirige vers /profile si connecté.
   */
  useEffect(() => {
    if (isConnected) {
      navigate("/profile");
    }
  }, [isConnected, navigate]);

  return (
    <div className="container-login">
      <main className="main bg-dark-login">
        <section className="login-content">
          <i className="fa fa-user-circle login-icon"></i>
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="tony@stark.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="error-msg">Ce champ est requis</p>
              )}
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="error-msg">Ce champ est requis</p>
              )}
            </div>

            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button type="submit" className="login-button">
              Sign In
            </button>

            <a href="/signup" className="login-button">
              Sign Up
            </a>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
