import { TextField, Button, Box, CircularProgress } from "@mui/material"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase/firebaseconfig";

const Login = () => {

  const [loading, setLoading] = useState(false);
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setLoading(true);

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate('/');
      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      }).finally(() => {
        setLoading(false);
      })

  }

  return (
    <>
      <Box sx={{ height: '80vh' }} className="d-flex justify-content-center align-items-center">

        <form onSubmit={login} className="d-flex justify-content-center flex-column gap-5">

          <TextField type="email" id="standard-email" label="Email" variant="standard" inputRef={email} required />
          <TextField type="password" id="standard-password" label="Password" variant="standard" inputRef={password} required />

          <Button type='submit' variant="contained">{loading ? <CircularProgress sx={{ color: 'white' }} size={20} /> : 'Login'}</Button>

        </form>

      </Box>      I
    </>
  )
}

export default Login