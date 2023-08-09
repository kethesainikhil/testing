import React, { useEffect, useState } from 'react'
import axios from "../../api/axios"
const PostDetails = () => {

    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [contact,setcontact] = useState(null);
    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleSubmit = () =>{
        setcontact({
            name:name,
            email:email
        })   
    }
    const postContact = async (id) =>{
        if(id){
            const {name,email} = setcontact
            const res = await axios.post("/contacts",{
                name:name,
                email:email
            })
            console.log(res)
        }
    }

    useEffect(()=>{
        postContact(contact)
    },[contact])
  return (
    <div>
        <h1>name:</h1><input type="text" onChange={(e)=>handleName(e)} value={name} />
        <h2>email:</h2><input type="email"  onChange={(e)=>handleEmail(e)} value={email}/>
        <button type='submit' onClick={handleSubmit}>add contact</button>
    </div>
  )
}

export default PostDetails
