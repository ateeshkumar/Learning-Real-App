import React, { useEffect, useState} from 'react';
import axios  from 'axios';
import './index.css';
import CodeSnippit from '../codeSnippt/CodeSnippit';

const Middle = ({id,add,content}) => {
  const [idx,setidx] = useState(id);
  const [title,setTitle] = useState("");
  const [desc,setdesc] = useState([]);

  const getDescription=async(add,idx)=>{
    try {
      const {data} = await axios.get(`http://localhost:8080/api/v1/content/get-detail-${add}/${idx}`);
      if(data?.success){
        setTitle(data?.description.title);
        setdesc(data?.description.description);
      }
      
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(()=>{
    getDescription(add,idx);
  },[add,idx])
  useEffect(()=>{
    setidx(id);
  },[id]);
  console.log(desc);
  return (
    <div className='mid-container'>
      <div className="cos-details">
        <div className='details'>
          <h2>{title}</h2>
          { desc && desc.length>0 ?(
            desc.map((item)=>(
              <div>
                <h4>{item.subtitle}</h4>
                <h4>{item.question}</h4>
                <CodeSnippit/>
                <p>{item.subdescription}</p>
                <p>{item.options}</p>
                <p>{item.answer}</p>
              </div>
            ))):(<h2 style={{color:"red"}}>We Don't have a content</h2>)
          }
          
        </div>


      </div>
      <div className="ad">
        
      </div>
    </div>
  )
}

export default Middle
