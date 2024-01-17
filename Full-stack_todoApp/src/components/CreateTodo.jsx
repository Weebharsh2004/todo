import { useState } from "react"

export function CreateTodo(){

   const [title, setTitle]= useState("");
   const[description, setDescription]= useState("")

    return <div>
         <input id="title" style={{
            padding:10,
            margin:10,
         }} onChange={function (e){
            const value = e.target.value;
            setTitle(value);
         }} type="input" placeholder="title"></input>  <br></br>
         <input id="desc" style={{
            padding:10,
            margin:10,
         }} onChange={function (e){
            const value = e.target.value;
            setDescription(value);
         }}type="input" placeholder="description"></input>  <br></br>

         <button style={{
            padding:10,
            margin:10,
         }} onClick={()=>{
            fetch("http://localhost:3000/todo",{
               method:"POST",
               body: JSON.stringify({
                  title: title,
                  description: description
               }),
               headers:{
                  "Content-Type": "application/json"
               }
            }).then( async function (res){
               const json = await res.json();
               alert("todo added successfully");
            })
         }}> Add a todo </button>
    </div>
}