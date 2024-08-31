import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import './NavBar.css'

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div>
          <button>
            <Link to={'/'}>Marca 👕</Link>
          </button>
        </div>
        <div>
          <button>
            <Link to={'/'}>Inicio</Link>
          </button>
          <button>
            <Link to={'/category/verano'}>Verano</Link>
          </button>
          <button>
            <Link to={'/category/invierno'}>Invierno</Link>
          </button>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </>
  )
}