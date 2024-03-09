import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const Protectedroutes = ({ components }) => {

    const [isUser, setIsUser] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid);
                setIsUser(true);
                return
            }else{
                navigate('/Login')
                console.log('User is not Logged In');
                 }
            });
        }, [])

    return (
    
            isUser ? components : <Typography variant="h1" color="initial" >Loading ...</Typography>
    )
}

export default Protectedroutes
