import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TransactionRow from "../../components/TransactionRow/TransactionRow";

/**
 * Page Transactions affichant la liste des transactions de l'utilisateur.
 * Chaque ligne est rendue via le composant TransactionRow.
 */
function Transactions() {
  const firstName = useSelector((state) => state.user.firstName);
  const navigate = useNavigate();

  // Redirection si l'utilisateur n'est pas authentifié
  useEffect(() => {
    if (!firstName) {
      navigate("/login");
    }
  }, [firstName, navigate]);

  return (
    <main className="transactions-page">
      <div className="header">
        <h1>Transactions</h1>
        <p>Bonjour, {firstName}</p>
      </div>

      <section className="transactions-section">
        <h2 className="sr-only">Liste des transactions</h2>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Montant</th>
              <th>Solde</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <TransactionRow
              date="27/03/2024"
              description="Paiement à Wonder Woman"
              amount="-$250.00"
              balance="$1,832.79"
            />
            <TransactionRow
              date="25/03/2024"
              description="Salaire Mars"
              amount="+$3,200.00"
              balance="$2,082.79"
            />
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Transactions;
