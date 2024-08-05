import React from 'react';
import Ku from "./Ku";
import { useState } from "react";

const Comp = (props) => {
    const [count , setcount]=useState(0);
    const [co ,setco]=useState(0)
    let c=0;
    function counter(){
      c=c+1;
      console.log(c)
      if(c===7){
        setcount(c);
        
      }
    }
 const {array}=props;
  return (
    <div>
        {array.map((res)=>(<div style={{display:"flex"}}>{res.map((ans)=>(<Ku value={ans} count={count} setcount={counter}/>))}</div>))}
      
    </div>
  )
}

export default Comp
