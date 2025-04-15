// pages/index.js

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Real Delta Land</h1>
      <p>Bine ai venit în inima Deltei Dunării!</p>

      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Delta Dunării"
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px', marginTop: '1rem' }}
      />

      <h2 style={{ marginTop: '2rem' }}>Experiențe autentice</h2>
      <p>
        Descoperă frumusețea naturală a Deltei Dunării, cazează-te în camere rustice și relaxează-te în mijlocul naturii.
        Plimbări cu barca, gastronomie locală și apusuri spectaculoase te așteaptă!
      </p>

      <h2 style={{ marginTop: '2rem' }}>Navigare rapidă</h2>
      <ul>
        <li><a href="/camere">Camere</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}
