import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      return "Bitte Name, E-Mail und Nachricht ausfüllen.";
    }
    if (!form.email.includes("@")) {
      return "Bitte gültige E-Mail eingeben.";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Fehler beim Senden.");
      }

      setSuccess("Ihre Anfrage wurde erfolgreich gesendet.");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err: any) {
      setError(
        err.message || "Verbindung zum Server konnte nicht hergestellt werden."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2>Kontakt</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>E-Mail *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Telefon</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Nachricht *</label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Senden..." : "Anfrage senden"}
        </button>
      </form>

      {success && (
        <p style={{ color: "green", marginTop: 10 }}>{success}</p>
      )}

      {error && (
        <p style={{ color: "red", marginTop: 10 }}>{error}</p>
      )}
    </section>
  );
}
