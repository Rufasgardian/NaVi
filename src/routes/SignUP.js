import React, { Component, useContext, useState } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import { Context } from "../components/Context";
const SignUP = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    message: "",
  });

  const { login } = useContext(Context);

  const handleChange = (e, { name, value }) => setState({ [name]: value });


  const handleSubmit = () => {

    const { name, email, password, repeatPassword, message } = this.state

    var isValid = true;  
    

    if((password.length < 8 || password.length > 20) || (!password)){
      
      this.setState({message: "Password length should be between 8 and 20"})
      isValid = false;


    }else if(password.toString() !== repeatPassword.toString()){

      this.setState({message:'Passwords do not match'});
      isValid = false;

    }else if ((typeof email !== "undefined") || (!email)) {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      
      if(!pattern.test(email)){

        isValid = false;
        this.setState({message:'Email is not valid'});

      }

    }else if (!name){
      
      isValid = false;
      this.setState({message:'Please enter your username'});

    }
    


    if (isValid) {
      setState({ message: "Success!!!" });
      login("dhasjkdhakj")
      // fetch("http://0f899f22e5ee.ngrok.io/api/register/", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   mode: "no-cors",
      //   body: {
      //     username: name,
      //     email: email,
      //     password: password,
      //     password2: repeatPassword,
      //   },
      // })
      //   .then((token) => console.log("Token: ", token))
      //   .catch(console.error);
    }

  }

  const { name, email, password, repeatPassword, message } = state;

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />

          <Form.Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />

          <Form.Input
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
          />

          <Form.Input
            placeholder="Repeat Password"
            name="repeatPassword"
            value={repeatPassword}
            onChange={handleChange}
            type="password"
          />

          <Form.Button content="Submit" />
        </Form.Group>
      </Form>

      <h2>{message}</h2>
    </div>
  );
};

export default SignUP;
