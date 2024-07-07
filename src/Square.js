import React from 'react'


const Square = ({ inputValue, validColor, hexValue }) => {
  return (
     <div className='projectDiv'>
          <div className='square' style={{backgroundColor: validColor && inputValue}}>
            <p>{inputValue}</p>
            <p>{hexValue}</p>
          </div>
     </div>
  )
}


export default Square
