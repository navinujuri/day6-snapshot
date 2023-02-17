import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Outlet, useNavigate } from "react-router-dom";
import { Store } from "../store/Store";


export default function Home() {
  const { setSearch,setPageNumber } = useContext(Store);
  const navigate = useNavigate();

  function handleSearch(e) {
    setSearch(e.target.value)
    setPageNumber(1)
    navigate("/category")
    
  }

  return (
    <>
      <div id="container" style={container}>
        <h1 id="snapshot " style={snapshot}>SnapShot</h1>
        <div id="innerbox" style={innerbox}>
          <input type="search" id="searchinp" style={searchinp} placeholder="search..." onChange={(e) => {
            setSearch(e.target.value);
          setPageNumber(1)}} />
          <button  onClick={() => {navigate("/category")}} style={{backgroundColor:"#171414",borderRadius:"5px",marginLeft:"5px",color:"white"}}> <SearchIcon /> </button>
        </div>

        <div id="filterbtns" style={filterbtns}>
          <button style={btns} onClick={handleSearch} value={"mountains"}>Mountains</button>
          <button style={btns} onClick={handleSearch} value={"beaches"}>Beaches</button>
          <button style={btns} onClick={handleSearch} value={"birds"}>Birds</button>
          <button style={btns} onClick={handleSearch} value={"food"}>Food</button>
        </div>

      </div>
 
      <Outlet />
    </>
  );
}

// STYLES ---------------------------------------------------------------------------------

const container={ color: "black",
display: "flex",
flexDirection: "column",
justifyContent: "space-evenly",
alignItems: "center",
  height: "200px"
}

const snapshot ={
  fontFamily: "Allura",
  fontWeight: "900",
  margin: "0px"
}
const innerbox ={

  color: "black",
  display: "flex",

}
const searchinp ={

  color: "grey",
  height: "32px",
  borderRadius: "5px",
  paddingLeft: "10px"

}
const filterbtns ={
  color: "black",
  display: "flex",
  justifyContent: "space-evenly",
  width: "300px"


}

const btns = {
  padding: "5px",
  backgroundColor: "#171414",
  color: "white",
  borderRadius: "5px"
}