
import Link from 'next/link'
import Head from 'next/head'


class Navbar extends React.Component {

  state = {}

  render() {
    return (
      <nav className='navbar'>
        <div className='nav-inside'>
          <ul>
            <Link href="/">
              <a className='navlinks'>Home</a>
            </Link>
            <Link href="/thesis">
              <a className='navlinks'>Thesis</a>
            </Link>
            <Link href="/team">
              <a className='navlinks'>Team</a>
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
