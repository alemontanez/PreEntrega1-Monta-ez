/* eslint-disable react/prop-types */
import ItemList from './ItemList'
import './ItemListContainer.css'

export default function ItemListContainer() {

  return (
    <>
      <main>
        <div className="container">
          <ItemList />
        </div>
      </main>
    </>
  )
}