


import React,{useState,useEffect} from 'react';
import './vote.js';
import {Form , Button} from 'react-bootstrap'
 const App=()=>{
  const [data,setData] =useState([])
  const [login , setLogin] = useState(true)
      const getdata=async()=>{
        const response=await fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json');
        setData(await response.json());
      }
      useEffect(()=> {
        getdata();
      },[]);

      
    
  
  return (
     <>

      {

        login ? (<Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="user" placeholder="Enter user" />
            
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit" onClick={()=> setLogin(false)}>
            Submit
          </Button>
        </Form>) : (  <div className="container-fluid mt-5">
    <div className="row "><h2>DISH POLL</h2>
  
    {
      data.map((curElem)=>{
   return(
    <div>
   
    <div className="col mt-5">
      <div className="card p-1">
        <div className="d-flex align-items-center">
          <div className="image"><img src={curElem.image} alt="images" class="rounded" width="160"/></div>
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

        )
      }

     </>




   
     
    

   
  );
  }
export default App;
