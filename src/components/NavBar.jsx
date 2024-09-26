import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import './NavBar.css'

export default function NavBar() {
  
  return (
    <>
      <nav className="navbar">
        <div>
            <Link to={'/'}>
              <button>Horizons 👕</button>
            </Link>
        </div>
        <div>
          <Link to={'/'}>
            <button>Inicio</button>
          </Link>
          <Link to={'/category/remeras'}>
            <button>Remeras</button>
          </Link>
          <Link to={'/category/buzos'}>
            <button>Buzos</button>
          </Link>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </>
  )
}