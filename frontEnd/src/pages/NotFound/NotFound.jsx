import React from "react";

/**
 * Composant affiché lorsqu'aucune route ne correspond
 * @returns {JSX.Element}
 */
function NotFound() {
  return (
    <main className="not-found">
      <h1>404 - Page non trouvée</h1>
      <p>Oups, cette page n'existe pas.</p>
    </main>
  );
}

export default NotFound;
