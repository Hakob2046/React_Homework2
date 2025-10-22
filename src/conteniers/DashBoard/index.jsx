import React,{useState} from "react";
import UseRef from "../../components/das6/UseRef"


export const DashBoard=()=>{
    const [counter,setCounter]=useState(0);

    return (
        <div>
            <UseRef/>

            <button onClick={()=>setCounter(preventvalue=>preventvalue + 1)}>Enter</button>
            <p>{counter}</p>


        </div>
    )
};

