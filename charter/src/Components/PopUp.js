import React from "react"
import './PopUp.css'

function PopUp (props){
    //trigger pop up conditional 
    return(props.trigger) ? (
        <div className="popup">
            <div className="inner-popup">
                {props.children}
                <button className="exit-button" onClick={()=> props.setTrigger(false)}>Close</button>
            </div>
        </div>
    ) :"";
}
export default PopUp