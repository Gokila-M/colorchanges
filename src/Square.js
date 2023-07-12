import React from 'react'

export const Square = ({colorValue,hexValue,isDark}) => {
    // console.log(isDark);
  return (
    <section
     className='square'
     style={{
        backgroundColor: colorValue,
        color: isDark ? "black" : "white"
    }}
    >
     <p> {colorValue? colorValue : "Empty Value"} </p>
     <p> {hexValue? hexValue : null} </p>
       
    </section>
  )
}

Square.defaultProps = {
   colorValue:"Empty color",
}
