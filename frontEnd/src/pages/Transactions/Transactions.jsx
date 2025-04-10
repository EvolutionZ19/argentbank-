import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TransactionRow from "../../components/TransactionRow/TransactionRow";
import transactions from "../../data/transactions";
import "./Transactions.css";

/**
 * Page Transactions affichant la liste des transactions de l'utilisateur.
 */
function Transactions() {
  const firstName = useSelector((state) => state.user.firstName);
  const navigate = useNavigate();

  useEffect(() => {
    if (!firstName) {
      navigate("/login");
    }
  }, [firstName, navigate]);

  return (
    <div className="container-account">
      <section className="account">
        <div className="account-content-wrapper-transactions">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
      </section>

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
            {transactions.map((tx) => (
              <TransactionRow
                key={tx.id}
                date={tx.date}
                description={tx.description}
                amount={tx.amount}
                balance={tx.balance}
              />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
