import { Box, TextField, Typography,Button } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import { collection, addDoc, Timestamp, getDocs, deleteDoc, doc, updateDoc, query, where } from "firebase/firestore"; 
import { auth, db } from "../../config/firebase/firebaseconfig";
import BasicCard from "../../components/Cards";

const Home = () => {

const todo = useRef();
const [todos, setTodos] = useState([]);
 
          //Read Data from Database to Screen Starts
useEffect(()=>{

  const getData = async ()=>{
     
    const q = query(collection(db, "MaterialUI-React"), where("uid", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    const fetchedTodos = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setTodos(fetchedTodos);
  }
  getData();
},[])
            //Read Data from Database to Screen Ends


            // Adding data to the Database
const addtodo = async (e) =>{
  e.preventDefault();
  console.log(todo.current.value);
  try {
    const docRef = await addDoc(collection(db, "MaterialUI-React"), 
    {
      title: todo.current.value,
      time: Timestamp.fromDate(new Date()),
      uid: auth.currentUser.uid
    });
    console.log("Document written with ID: ", docRef.id);
    setTodos([{title: todo.current.value, id: docRef.id},... todos]);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
              // Adding data to the Database Ends


              // Delete data to the Database Starts

const Deletetodo = async (index)=>{
   console.log(todos[index]);
  try{
    await deleteDoc(doc(db, "MaterialUI-React", todos[index].id));
    todos.splice(index, 1);
    setTodos([... todos]);
  }
  catch(error){
    console.log(error);
  }
}            
              // Delete data to the Database Ends



              // Update data to the Database Starts

const Update = async(index) =>{
  const Edit = prompt('Enter Todo here');

  const washingtonRef = doc(db, "MaterialUI-React", todos[index].id);
    await updateDoc(washingtonRef, {
    title: Edit
     });
     todos.splice(index,1,{title: Edit});
     setTodos([... todos]);
}

              // Update data to the Database Ends
  return (
    <>
      <Typography className="d-flex flex-wrap justify-content-center text-primary mt-4" variant="h3">Todo App</Typography>

      <Box className = "d-flex flex-wrap justify-content-center mt-5">
         <form onSubmit={addtodo}>
              <TextField sx={{width:400}} label="Enter Todo" id="Enter Todo" variant="outlined" inputRef={todo} />
              <Button sx={{padding: 1.8, mt:0.1}} type="submit" variant="contained">Add</Button>
         </form>
      </Box>

      <Box className ="d-flex flex-wrap flex-col justify-content-center align-items-center mt-5 gap-5" >
        {todos.length > 0 ? todos.map((item,index)=>{
            return <BasicCard key={index} title={item.title} deletetodo={()=>Deletetodo(index)} update={()=>{Update(index)}} />
         }):<Typography className="text-primary mt-5" variant="h5">Not Found</Typography>}
      </Box>
    </>
  )
}

export default Home