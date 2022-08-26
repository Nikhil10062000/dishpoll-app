import React,{useState,useEffect} from 'react';
import './vote.js';

const App=()=>{
  const [data,setData] =useState([])
 
      const getdata=async()=>{
        const response=await fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json');
        setData(await response.json());
      }
      useEffect(()=> {
        getdata();
      },[]);

      
    
  
  return (
  
    
    <div className="container-fluid mt-5">
    <div className="row "><h2>DISH POLL</h2>
  
    {
      data.map((curElem)=>{
   return(
    <div>
   
    <div className="col mt-5">
      <div className="card p-1">
        <div className="d-flex align-items-center">
          <div className="image"><img src={curElem.image} class="rounded" width="160"/></div>
          <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0 textLeft">{curElem.dishName}</h4><span className="textLeft"key={curElem.id}></span>
            <div className="p-2 mt-2 bg-secondary d-flex justify-content-between rounded text-black status">
              <div className="d-flex flex-column"><span className="articles">{curElem.description}</span><span className="number1"></span></div>
              
               
            </div>
           
           
          </div>
          
        </div>
        <div className='jam'> <button className="  btn btn-success" type="submit">VOTE</button> <span><button className="  btn btn-danger" type="submit">UNVOTE</button></span></div>
       
      </div>
    
     
        </div>
      </div>
   )
      })
    }
  </div>
</div>

   
  );
  }
export default App;
