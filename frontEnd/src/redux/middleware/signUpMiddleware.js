import { signUp, showError } from '../slice/userSlice';

/**
 * Middleware pour l'inscription d'un utilisateur
 * @param {Object} formDataSignUp - Données du formulaire d'inscription
 * @returns {Function}
 */
const signUpMiddleware = (formDataSignUp) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataSignUp),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(signUp(data.body));
        alert("Inscription réussie !");
      } else if (response.status === 400) {
        dispatch(showError({ errorMessage: data.message }));
        alert("L'email est déjà utilisé");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      dispatch(showError({ errorMessage: error.message }));
      alert("Une erreur est survenue lors de l'inscription.");
    }
  };
};

export default signUpMiddleware;
