import React, { useState } from "react";

/**
 * Composant représentant une ligne de transaction
 * Peut être déplié pour afficher plus d'informations
 * @param {Object} props - Données de la transaction
 * @returns {JSX.Element}
 */
function TransactionRow({ date, description, amount, balance }) {
  const [isOpen, setIsOpen] = useState(false);

  // Bascule l'affichage des détails
  const toggleDetails = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>{amount}</td>
        <td>{balance}</td>
        <td>
          <button onClick={toggleDetails}>
            {isOpen ? "Fermer" : "Détails"}
          </button>
        </td>
      </tr>

      {/* Détails affichés si isOpen est true */}
      {isOpen && (
        <tr className="transaction-details">
          <td colSpan="5">
            <div>
              <p><strong>Type :</strong> Virement bancaire</p>
              <p><strong>Catégorie :</strong> Professionnel</p>
              <p><strong>Note :</strong> Transaction validée</p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default TransactionRow;
