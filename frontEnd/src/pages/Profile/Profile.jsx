import React, { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Récupérer le token depuis localStorage
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("Aucun token trouvé, veuillez vous connecter.");
      setLoading(false);
      return;
    }

    // Fonction pour récupérer le profil
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST", // Utilisation de POST pour la récupération du profil
          body: JSON.stringify({ token }), // Envoi du token dans le corps de la requête
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setProfile(data.body);
        } else {
          console.error("Erreur lors de la récupération du profil :", data.message);
        }
      } catch (error) {
        console.error("Erreur réseau lors de la récupération du profil :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []); // Exécution une seule fois au montage du composant

  return (
    <main className="profile-page">
      <section>
        <h1>Bienvenue sur votre profil</h1>
        {loading ? (
          <p>Chargement...</p>
        ) : profile ? (
          <div>
            <p><strong>Nom :</strong> {profile.lastName}</p>
            <p><strong>Prénom :</strong> {profile.firstName}</p>
            <p><strong>Email :</strong> {profile.email}</p>
          </div>
        ) : (
          <p>Erreur lors du chargement du profil.</p>
        )}
      </section>
    </main>
  );
}

export default Profile;
