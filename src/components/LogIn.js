import React, { Component, useContext, useState } from "react";
import { Form } from "semantic-ui-react";
import { Context } from "./Context";

const LogIn = () => {
  const [state, setState] = useState({
    name: "",
    password: "",
    message: "",
  });

  const { login } = useContext(Context);

  const handleChange = (e, { name, value }) => setState({ [name]: value });

  const handleSubmit = () => {
    const { name, password, message } = state;
    login("dhasjkdhakj");
  };

  const { name, password, message } = state;

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
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
          />

          <Form.Button content="Submit" onClick={handleSubmit} />
        </Form.Group>
      </Form>

      <h2>{message}</h2>
    </div>
  );
};

export default LogIn;
