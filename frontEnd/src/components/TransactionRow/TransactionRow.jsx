import React from "react";

/**
 * TransactionRow Component
 * montre les détails d'une transaction
 * @param {Object} props
 * @param {string} props.date - Transaction date
 * @param {string} props.description - Transaction description
 * @param {string} props.amount - Transaction amount
 * @param {string} props.balance - Remaining balance after transaction
 * @returns {JSX.Element}
 */
function TransactionRow({ date, description, amount, balance }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{amount}</td>
      <td>{balance}</td>
      <td>
        <button>Details</button>
      </td>
    </tr>
  );
}

export default TransactionRow;
