const { Link } = ReactRouterDOM;

function Login({ onLogin }) {
  const [form, setForm] = React.useState({ email: "", password: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await auth.signInWithEmailAndPassword(form.email, form.password);
      onLogin(res.user);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm mx-auto" style={{ maxWidth: 400 }}>
        <h3 className="mb-4 text-center">Login</h3>
        <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control mb-3" placeholder="Email" required />
        <input type="password" name="password" value={form.password} onChange={handleChange} className="form-control mb-3" placeholder="Password" required />
        <button type="submit" className="btn btn-success w-100">Login</button>
        <div className="text-center mt-3">
          Don’t have an account? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}