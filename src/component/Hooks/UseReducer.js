import React, { useReducer }  from 'react'
import './style.css'
const reducer = (state , action) => {
    if(action.type === "INCR"){
        state = state + 1;
    } 
    if(state > 0 && action.type === "DECR"){
        state = state - 1;
    }
    return state;
};

function UseReducer() {

    const initialData = 10;
    //dispatch is used to trigger reducer
    const [state, dispatch] = useReducer(reducer, initialData); 
    //console.log(state);
    return (
        <>
<div className="center-div">
    <p>{state}</p>
        <div className="button2" onClick={() => dispatch({type : "INCR"}) }>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className="button2" onClick={() => dispatch({type : "DECR"})}>
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

export default UseReducer
