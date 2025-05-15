const { BrowserRouter, Route, Switch, useHistory } = ReactRouterDOM;

function AppRouter() {
  const [user, setUser] = React.useState(null);
  const history = useHistory();

  React.useEffect(() => {
    auth.onAuthStateChanged(u => {
      setUser(u);
    });
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    history.push("/dashboard");
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      history.push("/login");
    });
  };

  const handleRegister = () => {
    history.push("/login");
  };

  return (
    <Switch>
      <Route exact path="/">
        {user ? <Dashboard user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
      </Route>
      <Route path="/login">
        <Login onLogin={handleLogin} />
      </Route>
      <Route path="/register">
        <Register onRegister={handleRegister} />
      </Route>
      <Route path="/dashboard">
        {user ? <Dashboard user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
      </Route>
    </Switch>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  document.getElementById("root")
);