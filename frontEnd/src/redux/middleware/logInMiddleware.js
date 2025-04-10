import { signIn, showError, getProfile } from '../slice/userSlice';

/**
 * Middleware de connexion utilisateur.
 * Authentifie et récupère le profil utilisateur.
 * @param {Object} formDataSignIn - email + password
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

        // Dispatch du token dans Redux
        dispatch(signIn({ token }));

        // Appel au profil utilisateur
        const profileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const profileData = await profileResponse.json();

        if (profileResponse.ok) {
          dispatch(getProfile({
            email: profileData.body.email,
            firstName: profileData.body.firstName,
            lastName: profileData.body.lastName,
            id: profileData.body.id
          }));
        } else {
          dispatch(showError({ errorMessage: profileData.message }));
        }

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
