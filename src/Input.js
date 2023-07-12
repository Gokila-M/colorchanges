import colorNames from 'colornames';
import React from 'react'

export const Input = ({colorValue,setColorValue,setHexValue,isDark,setIsDark}) => {
    // console.log(isDark);
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label>Add color :</label>
        <input
          autoFocus
          type='text'
          placeholder='Add Color Name'
          required
          value={colorValue}
          onChange={(e)=>{
            setColorValue(e.target.value);
            setHexValue(colorNames(e.target.value));
        }}
        />
        <button
          type='button'
          onClick={()=>{setIsDark(!isDark)}}
        >
          Toggle Text Color 
        </button>
      
       
    </form >
  )
}
