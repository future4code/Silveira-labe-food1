import React, { useEffect, useState } from "react";
import axios from 'react';
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

export default function LoginPage() {
  let navigate = useNavigate();

  const [form, InputChange, clear] = useForm({
    email: "",
    password: ""
  })

  // const body = {
  //   email: "",
  //   password: ""
  // }

  const login = () => {
    axios
    .post('https://us-central1-missao-newton.cloudfunctions.net/rappi4A/login', form)
    .then((res) => {
      console.log(res.data)
      alert("Login successfully!")
    })
    .catch((error) => {
      console.log(error)
      alert("Error. Try again!")
    })
}

console.log(login)

  return (
    <div>
       
    </div>
  )
}
