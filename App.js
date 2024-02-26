
import { useState } from 'react';
import './App.css';
import"./index.css";
import InputArea from './component/inputarea';
import ToDoItem from './component/todoitem';
import { Button } from '@blueprintjs/core';

function App() {
  const[items,setItems]=useState([]);
  const addItems=(inputText)=>{
    setItems((prevItems)=>{
     return[...prevItems,inputText] 
    });
  };
 
  const deleteItem=(id)=>{
     setItems((prevItems)=>{
     return prevItems.filter((items,index)=>{
      return index!==id;
     })
     }
  )}

  return (
    <div className="container">
      <div className='heading'>
       <h1>To-Do-List</h1>

      </div>      
      <InputArea addItems={addItems}/>
      <div>
        
          
  
      
        <ul>
          {items.map((items,index)=>{
            return(
              
              <ToDoItem text={items} key={index} deleteItem={deleteItem} id={index}/>
  
            )
  
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
