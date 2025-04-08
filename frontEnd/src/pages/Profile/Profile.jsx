import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const firstName = useSelector((state) => state.user.firstName);

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
