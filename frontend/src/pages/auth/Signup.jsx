import React from 'react'
import Form from './Form'
import axios from 'axios'

export const Signup = () => {
  const handleSignin = async(data) => {
      try {
    const response = await axios.post(
      'http://localhost:7777/user/signup',
      data
    );

    if (response.status === 200 || response.status === 201) {
      alert("Successful Register");
    }

  } catch (error) {
    console.log(error);
    alert("Registration Failed");
  }
  }
  return (
    <Form name="Sign Up" onEvent={handleSignin} />
  )
}
