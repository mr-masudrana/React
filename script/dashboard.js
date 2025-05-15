function Dashboard({ user, onLogout }) {
  return (
    <div>
      <Navbar user={user} onLogout={onLogout} />
      <div className="container mt-4 text-center">
        <h2>Welcome, {user.displayName || user.email}</h2>
        <p>This is your Dashboard.</p>
      </div>
    </div>
  );
}