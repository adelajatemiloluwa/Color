import React from 'react'
import colorNames from 'colornames'

const Input = ({ inputValue, setInputValue, setValidColor, setHexValue }) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log(inputValue);
             setInputValue("");
        
            }}>
            <input
                autoFocus
                required
                placeholder='Enter a color'
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value) 
                    setHexValue(colorNames(e.target.value))
                    colorNames(e.target.value) === undefined ? setValidColor(false) : setValidColor(true)
                }}>
            </input>
            <button>Toggle Text Color</button>
    
            
        </form>
    
    )
}

export default Input
