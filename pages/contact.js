// pages/contact.js

export default function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contactează-ne</h1>
      <p>Completează formularul de mai jos pentru a ne trimite un mesaj.</p>
      <form style={{ marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Nume:</label><br />
          <input type="text" placeholder="Numele tău" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label><br />
          <input type="email" placeholder="Emailul tău" />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Mesaj:</label><br />
          <textarea placeholder="Scrie-ne un mesaj..." rows="5" />
        </div>
        <button type="submit">Trimite</button>
      </form>
    </div>
  );
}
