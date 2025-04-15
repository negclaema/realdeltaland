import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <h1>Contactează-ne</h1>
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
    </Layout>
  );
}
