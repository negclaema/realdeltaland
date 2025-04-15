import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Real Delta Land</h1>
      <p>Bine ai venit în inima Deltei Dunării!</p>
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Delta Dunării"
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px', marginTop: '1rem' }}
      />
    </Layout>
  );
}
