import React from "react"
import "./style.css";
import {AiTwotoneStar} from "react-icons/ai"; 


export default function MyComponent(props) {
    

    return(
        <div id="card-wrapper">
            <div id="img">
              
            <img src={props.val.img} alt="img not avaliable"/>
        
            </div>
            <div id="parallel-wrapper">
                <div className="inner-row-wrapper">
                <p className="space">{props.val.name}</p>
                <p>{props.val.rating}<AiTwotoneStar id="star" /> </p>
                </div>
                <p>{props.val.weight}{props.val.volType}</p>
                <div className="inner-row-wrapper" >
                <p className="space">{props.val.mrp}</p>
                <p  style={{textDecoration:"line-through"}}>{props.val.specialPrice}</p>
                </div>
                <button id="button" onClick={null}>ADD TO CART</button>
                
            </div>
            
        </div>
    )
}