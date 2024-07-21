import React from 'react'
import Create from './Create';
import {useState} from 'react';
import { axios } from 'axios';

function Home() {

const [todos,setTodos] =useState([])
useEffect(()=>{
  axios.get('http://localhost:3006/get')
   .then(result =>setTodos(result.data))
   .catch(err =>console.log(err))
},[])


 const handleEdit =(id)=>{
  xios.get('http://localhost:3006/get')
   .then(result =>setTodos(result.data))
   .catch(err =>console.log(err))
 }
  return (
    <div>
        <h2>Todo List</h2>
        <Create />
        {
            todos.length===0
            ?
            <div><h2>No record</h2></div>
            :
            todos.map(todo=>(
                <div>
                    {todo.title}
                </div>
            ))
        }
    </div>
  )
}
export default Home
