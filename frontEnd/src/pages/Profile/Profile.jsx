import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFirstName } from "../../store/userReducer";

function Profile() {
  const firstName = useSelector((state) => state.user.firstName);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!firstName) {
      navigate("/login");
    }
  }, [firstName, navigate]);

  // Active le formulaire de modification
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Annule la modification
  const handleCancel = () => {
    setIsEditing(false);
  };

  // Envoie les nouvelles infos à l’API et met à jour Redux
  const handleSave = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) return;

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: newFirstName,
          lastName: newLastName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(setFirstName(data.body.firstName));
        setIsEditing(false);
      } else {
        console.error("Erreur mise à jour profil :", data.message);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  return (
    <main className="profile-page">
      <div className="header">
        {!isEditing ? (
          <>
            <h1>
              Welcome back
              <br />
              {firstName}!
            </h1>
            <button onClick={handleEditClick}>Edit Name</button>
          </>
        ) : (
          <>
            <h1>Edit user info</h1>
            <div className="edit-form">
              <input
                type="text"
                placeholder="First name"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
              />
              <div className="edit-buttons">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </>
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
