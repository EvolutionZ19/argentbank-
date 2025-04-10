import { editProfile, showError } from '../slice/userSlice';

/**
 * Middleware pour modifier le profil utilisateur.
 * @param {string} token - Jeton d'authentification
 * @param {Object} formDatas - Données à modifier (firstName, lastName)
 * @returns {Function}
 */
const editUserProfileMiddleware = (token, formDatas) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formDatas),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(editProfile(formDatas));
        alert("✅ Profil mis à jour !");
      } else {
        dispatch(showError({ errorMessage: data.message }));
        alert("❌ Impossible de mettre à jour le profil.");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      dispatch(showError({ errorMessage: "Erreur réseau" }));
    }
  };
};

export default editUserProfileMiddleware;
