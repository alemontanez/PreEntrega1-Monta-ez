/* eslint-disable react/prop-types */
export default function ItemCount( {handleClickDec, handleClickInc, count} ) {

  return (
    <>
      <div>
        <button onClick={() => handleClickDec()}>-</button>
        <span> {count} </span>
        <button onClick={() => handleClickInc()}>+</button>
      </div>
    </>
  )
}