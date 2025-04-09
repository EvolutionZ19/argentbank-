import React from "react";
import "./Home.css";

/*
 * Page d'accueil 
 * Affiche une bannière promotionnelle et trois avantages client
 */
function Home() {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2>Chez Argent Bank, votre avenir financier est entre de bonnes mains</h2>
          <p>Profitez d'une gestion simple, rapide et sécurisée de vos comptes bancaires.</p>
        </section>
      </div>

      <section className="features">
        <div className="feature-item">
          <i className="fa fa-money feature-icon" aria-hidden="true"></i>
          <h3>Pas de frais cachés</h3>
          <p>Nos comptes sont sans frais d'ouverture, de gestion ou de clôture.</p>
        </div>
        <div className="feature-item">
          <i className="fa fa-shield feature-icon" aria-hidden="true"></i>
          <h3>Transactions sécurisées</h3>
          <p>Nous utilisons les technologies les plus avancées pour sécuriser vos données.</p>
        </div>
        <div className="feature-item">
          <i className="fa fa-thumbs-up feature-icon" aria-hidden="true"></i>
          <h3>Service client réactif</h3>
          <p>Nos conseillers sont disponibles 7j/7 pour répondre à vos besoins.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
