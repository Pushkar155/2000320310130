import React from 'react'
import "./card1.css";


const Card1 = ({delay, name,seat,price,id}) => {
    const invoke=()=>{
        console.log("clicked")
    }
  return (
    <div className='card 1'>
        {/* name ,delay,,seat,price
        */}
        <h2>Train name:{name}</h2>
        <h3>DelayedBy: {delay}</h3>
        <h3>Seat avaliable <h4>sleeper {seat.sleeper}</h4> <h4> AC {seat.AC}</h4></h3>
        <h3>Price <h4>sleeper {price.sleeper}</h4> <h4> AC {price.AC}</h4></h3>
        <button onClick={()=>invoke }>book</button><br/>
    </div>
  )
}

export default Card1