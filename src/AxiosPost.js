import React from 'react'
import axios from 'axios'
import { useState } from 'react';
export default function AxiosPost() {
    const data={fname:"",lastName:""};
    const [inputData,setInputdata]=useState(data)
    const handleData=(e)=>{
    setInputdata({...inputData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData)
        .then((response)=>{
            console.log(response)
        })

    }
    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((response)=>{
            console.log(response)
        })
    }
    const handleDelete=(e)=>{
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((response)=>{
            console.log(response)
        })
    }
    const handlePatch=(e)=>{
        e.preventDefault();
        axios.patch("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((response)=>{
            console.log(response)
        })
    }
  return (
    <>
    <label>First name</label>
    <input type="text" name="fname" value={inputData.fname} onChange={handleData}></input><br/>
    <label>Last name</label>
    <input type="text" name="lastName" value={inputData.lastName} onChange={handleData}></input><br/>
    <button onClick={handleSubmit}>Submit</button>
    <button onClick={handleUpdate}>Update</button>
    <button onClick={handleDelete}>Delete</button>
    <button onClick={handlePatch}>Patch</button>
    </>
  )
}
