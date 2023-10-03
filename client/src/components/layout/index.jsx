import React,{useEffect,useState} from "react";
import "./index.css";
import { useParams} from "react-router-dom";
import LeftSide from "../leftside";
import Middle from "../middle";
import axios from "axios";
import Navbar from "../navbar";
import Footer from "../footer";
const Layout = () => {
  const {id} = useParams();
  const {add} = useParams();
  const [content,setContent] = useState([]);
  const getAllConent = async(add)=>{
    try {
      const {data} = await axios.get(`http://localhost:8080/api/v1/content/get-${add}`);
      if(data?.success){
        setContent(data?.content);
      }
    
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
      getAllConent(add); 
  },[add])
  console.log(content)
  return (
    <>
    <div className="container">
    <Navbar/>
      <div className="body">
      
          <div className="left">
            <LeftSide search={content} add={add}/>
          </div>
          <div className="mid">

          <Middle id={id} add={add} content={content}/>
    
          </div>
         
      </div>
      <Footer/> 
    </div>
    </>
  );
};

export default Layout;
