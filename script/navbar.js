function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">MyBook</a>
        <div className="d-flex">
          <span className="text-white me-3">{user?.displayName || user?.email}</span>
          <button className="btn btn-outline-light btn-sm" onClick={onLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}