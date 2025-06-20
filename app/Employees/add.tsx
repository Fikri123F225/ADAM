import { useState } from "react";
import { useRouter } from "next/router";

export default function AddEmployee() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address:"",
    city: "",
    cin: "",
    isActive: true,
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("http://localhost:3000/api/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    router.push("/employees");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un employé</h2>
      <input name="firstName" placeholder="Prénom" onChange={handleChange} />
      <input name="lastName" placeholder="Nom" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Téléphone" onChange={handleChange} />
      <input name="cin" placeholder="CIN" onChange={handleChange} />
      <input name="address" placeholder="Adresse" onChange={handleChange} />
      <input name="city" placeholder="Ville" onChange={handleChange} />
      <button type="submit">Créer</button>
    </form>
  );
}
