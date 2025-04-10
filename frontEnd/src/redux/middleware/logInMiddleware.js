import { signIn, showError } from '../slice/userSlice';

/**
 * Middleware de connexion utilisateur.
 * Appelle l'API pour authentifier l'utilisateur.
 * @param {Object} formDataSignIn - Contient l'email et le mot de passe.
 * @returns {Function}
 */
const logInMiddleware = (formDataSignIn) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataSignIn),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.body.token;
        localStorage.setItem("authToken", token);
        dispatch(signIn({ token }));
        alert("Connexion réussie");
      } else {
        dispatch(showError({ errorMessage: data.message }));
        alert("Identifiants incorrects");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      dispatch(showError({ errorMessage: "Erreur réseau" }));
    }
  };
};

export default logInMiddleware;
