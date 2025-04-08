import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  // Récupère le prénom de l'utilisateur depuis le store Redux
  const firstName = useSelector((state) => state.user.firstName);
  const navigate = useNavigate();

  useEffect(() => {
    // Si aucun prénom, redirige vers /login
    if (!firstName) {
      navigate("/login");
    }
  }, [firstName, navigate]);

  return (
    <main className="profile-page">
      {/* En-tête de la page avec message de bienvenue et bouton de modification */}
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName}!
        </h1>
        <button>Edit Name</button>
      </div>

      {/* Liste des comptes affichés */}
      <h2 className="sr-only">Accounts</h2>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
