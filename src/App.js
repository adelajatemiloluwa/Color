import React from 'react'
import { useState } from 'react'
import Input from './Input';
import Square from './Square';


const App = () => {

  const [inputValue, setInputValue] = useState("");
  const [validColor, setValidColor] = useState(true);
  const [hexValue, setHexValue] = useState("");
  return (
    <div>
        <Square
          inputValue={inputValue}
          validColor={validColor}
          hexValue={hexValue}
          
         />
       <Input 
         setInputValue={setInputValue}
         inputValue={inputValue}
         setValidColor={setValidColor}
         hexValue={hexValue}
         setHexValue={setHexValue}
       />
     
      
      
    </div>
  )
}

export default App
