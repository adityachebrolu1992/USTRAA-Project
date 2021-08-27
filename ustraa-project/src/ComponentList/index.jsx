import "./style.css";
import React from "react";
import MyComponent from "../MyComponent";

export default function ComponentList(props){


    function check(val){
        if(val.type==props.sec){
            return val;
        }
    }

    return(
        props.data.filter(check).map((val,idx)=>{
            return <MyComponent val={val} key={idx} />
        })
    )
}