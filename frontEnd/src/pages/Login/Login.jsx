function Login() {
    return (
      <main className="login-page">
        <section className="login-form">
          <h1>Connexion</h1>
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="ex: test@banque.fr" />
            </div>
  
            <div>
              <label htmlFor="password">Mot de passe</label>
              <input type="password" id="password" />
            </div>
  
            <button type="submit">Se connecter</button>
          </form>
        </section>
      </main>
    );
  }
  
  export default Login;
  