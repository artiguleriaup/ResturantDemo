import React, { useState } from "react";
import "./style.css";

const UseState = () => {
    const initialState = 10;
    const [myNum , setMyNum] = useState(initialState);
    return (
        <>
<div className="center-div">
    <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className="button2" onClick={() => myNum > 0 ?setMyNum(myNum - 1):setMyNum(0)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div> 
</div>
        </>
    )
}

export default UseState;