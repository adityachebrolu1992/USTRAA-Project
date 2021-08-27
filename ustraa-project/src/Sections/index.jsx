import React from "react";
import "./style.css"




export default function Sections(props){

    function hairgrowth(){
        props.setSec("Hair Growth");
    }
    function cologen(){
        props.setSec("Cologen");
    }
    function hairoil(){
        props.setSec("Hair Oil")
    }
    function facewash(){
        props.setSec("Face Wash")
    }

    return(
        <div  id="section-wrapper">
            <button onClick={hairgrowth} className="border">
                <img src="https://shop.trell.co/media/catalog/product/U/S/USTRAA8904223818706-1_1.jpg?auto=webp&format=pjpg&width=700&quality=85" alt="img not avaliable"/>
                <p>Hair Growth</p>
            </button>
            <button onClick={cologen} className="border">
                <img src="https://shop.trell.co/media/catalog/product/b/a/base_camp_copy.jpg?auto=webp&format=pjpg&width=700&quality=85" alt="img not avaliable"/>
                <p>Cologen</p>
            </button>
            <button onClick={hairoil} className="border">
                <img src="https://shop.trell.co/media/catalog/product/0/2/021_20072021_1_1.jpg?auto=webp&format=pjpg&width=700&quality=85" alt="img not avaliable"/>
                <p>Hair Oil</p>
            </button>
            <button onClick={facewash} className="border">
                <img src="https://m.media-amazon.com/images/I/51nvMNmKiNL._SY355_.jpg" alt="img not avaliable"/>
                <p>Face Wash</p>
            </button>
            

        </div>
    )
}