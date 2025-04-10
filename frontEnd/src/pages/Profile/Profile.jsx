import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import editUserProfileMiddleware from "../../redux/middleware/editUserProfileMiddleware";

/**
 * Page de profil utilisateur
 */
function Profile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const userFirstName = useSelector((state) => state.user.firstName);
  const userLastName = useSelector((state) => state.user.lastName);

  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(userFirstName || "");
  const [lastName, setLastName] = useState(userLastName || "");

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    setFirstName(userFirstName); // remets les valeurs d'origine
    setLastName(userLastName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserProfileMiddleware(token, { firstName, lastName }));
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        {!isEditing ? (
          <>
            <h1>
              Welcome back<br />{userFirstName} {userLastName}!
            </h1>
            <button className="edit-button" onClick={handleToggleEdit}>
              Edit Name
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="top-container-editName">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
              />
            </div>
            <div className="bottom-container-editName">
              <button type="submit" className="button-save">Save</button>
              <button
                type="button"
                className="button-cancel"
                onClick={handleToggleEdit}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link to="/transactions" className="transaction-button">
            View transactions
          </Link>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link to="/transactions" className="transaction-button">
            View transactions
          </Link>
        </div>
      </section>

      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <Link to="/transactions" className="transaction-button">
            View transactions
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Profile;
