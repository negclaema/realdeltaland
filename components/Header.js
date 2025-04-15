import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Acasă</Link>
          </li>
          <li>
            <Link href="/despre">Despre Noi</Link>
          </li>
          <li>
            <Link href="/camere">Camere</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
	<li>
  	<Link href="/rezervare">Rezervare</Link>
	</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
