import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import signUpMiddleware from "../../redux/middleware/signUpMiddleware";
import "./SignUp.css";

/**
 * Page de création de compte
 */
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData) => {
    try {
      await dispatch(signUpMiddleware(formData));
      navigate("/login");
    } catch (error) {
      console.error("Erreur middleware sign up :", error);
    } finally {
      reset();
    }
  };

  return (
    <main className="main bg-dark-signup">
      <section className="login-content">
        <i className="fa fa-user-circle login-icon"></i>
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="ex: tony@stark.com"
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="firstName">Firstname</label>
            <input
              {...register("firstName", { required: true })}
              type="text"
              id="firstName"
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="lastName">Lastname</label>
            <input
              {...register("lastName", { required: true })}
              type="text"
              id="lastName"
            />
          </div>

          <button type="submit" className="login-button">
            Créer un compte
          </button>
          <a href="/login" className="login-button">
            Retour
          </a>
        </form>
      </section>
    </main>
  );
}

export default SignUp;
