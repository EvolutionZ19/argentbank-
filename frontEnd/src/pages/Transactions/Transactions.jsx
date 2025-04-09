import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Transactions() {
  const firstName = useSelector((state) => state.user.firstName);
  const navigate = useNavigate();

  // Redirection si l'utilisateur n'est pas authentifié
  React.useEffect(() => {
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
              <th>Amount</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Exemple de ligne statique */}
            <tr>
              <td>27/03/2024</td>
              <td>Payment to Wonder Woman</td>
              <td>-$250.00</td>
              <td>$1,832.79</td>
              <td>
                <button>Details</button>
              </td>
            </tr>
            <tr>
              <td>25/03/2024</td>
              <td>Salary March</td>
              <td>+$3,200.00</td>
              <td>$2,082.79</td>
              <td>
                <button>Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Transactions;
