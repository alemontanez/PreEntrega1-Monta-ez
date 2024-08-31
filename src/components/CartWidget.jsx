import { Link } from "react-router-dom"

export default function CartWidget() {
  return (
    <>
      
      <button>
        <Link to={'/cart'}>🛒3</Link>
      </button>
    </>
  )
}