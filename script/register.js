const { Link: RLink } = ReactRouterDOM;

function Register({ onRegister }) {
  const [form, setForm] = React.useState({ name: "", email: "", password: "", gender: "Male" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await auth.createUserWithEmailAndPassword(form.email, form.password);
      await res.user.updateProfile({ displayName: form.name });
      await database.ref("users/" + res.user.uid).set({
        name: form.name,
        email: form.email,
        gender: form.gender,
        uid: res.user.uid
      });
      alert("Registered Successfully!");
      onRegister();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm mx-auto" style={{ maxWidth: 400 }}>
        <h3 className="text-center mb-4">Register</h3>
        <input type="text" name="name" value={form.name} onChange={handleChange} className="form-control mb-3" placeholder="Full Name" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control mb-3" placeholder="Email" required />
        <input type="password" name="password" value={form.password} onChange={handleChange} className="form-control mb-3" placeholder="Password" required />
        <select name="gender" value={form.gender} onChange={handleChange} className="form-select mb-3">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" className="btn btn-primary w-100">Register</button>
        <div className="text-center mt-3">
          Already have an account? <RLink to="/login">Login</RLink>
        </div>
      </form>
    </div>
  );
}