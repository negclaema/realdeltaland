// components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#0070f3',
        color: 'white'
      }}>
        <h2 style={{ margin: 0 }}>Real Delta Land</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Acasă</Link>
          <Link href="/camere" style={{ color: 'white', textDecoration: 'none' }}>Camere</Link>
          <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </div>
      </nav>

      <main style={{ padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
}
