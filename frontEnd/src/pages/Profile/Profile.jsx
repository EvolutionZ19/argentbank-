import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const firstName = useSelector((state) => state.user.firstName);
  const navigate = useNavigate();

  useEffect(() => {
    if (!firstName) {
      // Si l'utilisateur actualise la page sans passer par /login
      navigate("/login");
    }
  }, [firstName, navigate]);

  return (
    <main className="profile-page">
      <section>
        <h1>Bienvenue sur votre profil</h1>
        <p>👋 Bonjour, {firstName} !</p>
        <p>Cette page affichera vos informations personnelles.</p>
      </section>
    </main>
  );
}

export default Profile;
