import React, { useContext, useEffect, useState } from "react";
import { Store } from "../store/Store";
import axios from "axios";
import Photo from "./Photo";
import Buttons from "./Buttons";


function Displayer() {
  let { search, pageNumber } = useContext(Store);
  let [photosList,setPhotosList] =useState([])

  let apiCall=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=587a2f12565214553c15654b308fac59&text=${search}&per_page=30&page=${pageNumber}&format=json&nojsoncallback=1`
  

useEffect(() => { 
  axios.get(apiCall).then((response) => {
   setPhotosList(response.data.photos.photo)
 }).catch((e) => { console.log(e) });
    
  },[search,pageNumber]);
  

  return (
    <>
      
       <Buttons/>
      <h2 style={{ textAlign: "center" }}>Results : for <span style={{ color: "red" }}>{search.toUpperCase()}</span></h2>
      <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",marginTop:"50px",width:"100vw"}}>
        {photosList.map((ele,ind) => { return <Photo key={ind} server={ele.server } id={ele.id } secret={ele.secret } />})
        }
      </div>
      <Buttons/>
    </>
  );
}

export default Displayer;
