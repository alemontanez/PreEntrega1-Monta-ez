/* eslint-disable react/prop-types */
import './ItemListContainer.css'

export default function ItemListContainer({ greeting }) {
    return (
        <>
        <div className="container">
            <h2>{greeting}</h2>
        </div>
        </>
    )
}