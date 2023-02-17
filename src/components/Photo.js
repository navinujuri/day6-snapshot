import React from "react";
import { Store } from "../store/Store";
import { useContext } from "react";
import "./Photo.css"


function Photo(props) {
    const { search } = useContext(Store);
    const uri=`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`
    return(  <img className="zoom" src={uri} alt={search}  style={{objectFit:"contain",width:"300px",height:"300px"}} />) 
      
    

}

export default Photo;
