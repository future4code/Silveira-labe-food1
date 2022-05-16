import React from "react";
import axios from 'react';
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { goToHomePage, goToSignUpPage } from "../../router/coordinator";


export default function LoginPage() {
  let navigate = useNavigate();

  const [form, InputChange, clear] = useForm({
    email: "",
    password: ""
  })

  const body = form

  const login = () => {
    // event.preventDefault();

    axios
      .post('https://us-central1-missao-newton.cloudfunctions.net/rappi4A/login', body)
      .then((res) => {
        console.log(res.data)

        if (res.data.user.hasAdress === false) {
          alert(
            `${res.data.user} you do not have an account. We will redirect you...`
          );
          goToSignUpPage(navigate);
        } else {
          alert("Welcome!")
          goToHomePage(navigate);
        }
        clear();
      })
      .catch((error) => {
        console.log(error)
        alert("Error. Try again!")
      })
  }

  // console.log(body)

  // const login = (e) => {
  //   e.preventDefault();
  //   // const token = localStorage.getItem('token');

  //   axios
  //   .post('https://us-central1-missao-newton.cloudfunctions.net/rappi4A/login', body)
  //   .then((res) => {
  //     console.log(res.data)
  //     localStorage.setItem('token', res.data.token)
  //     alert("Welcome!")
  //     goToHomePage(navigate)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //     alert("User not found")
  //   })
  // }

  return (
    <div>

      <form onSubmit={login}>
        <input
          name={"email"}
          value={form.email}
          onChange={InputChange}
          type={"email"}
          placeholder="Email"
          required
        />

        <input
          name={"password"}
          value={form.password}
          onChange={InputChange}
          type={"password"}
          placeholder="Password"
          required
        />

        <button type="submit">Login</button>
        {/* <button onClick={() => goToHomePage(navigate)}>Login</button> */}
      </form>

      <button onClick={() => goToSignUpPage(navigate)}>Sign Up</button>

    </div>
  )
}
