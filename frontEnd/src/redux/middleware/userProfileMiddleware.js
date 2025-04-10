import { getProfile, showError } from "../slice/userSlice";

/**
 * Middleware pour récupérer le profil utilisateur depuis l'API.
 * @param {string} token - Token d'authentification de l'utilisateur
 * @returns {Function} Middleware Redux Thunk
 */
const userProfileMiddleware = (token) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(getProfile(data.body));
      } else {
        dispatch(showError({ errorMessage: data.message }));
      }
    } catch (error) {
      dispatch(showError({ errorMessage: error.message }));
      console.error("Erreur réseau :", error);
    }
  };
};

export default userProfileMiddleware;
