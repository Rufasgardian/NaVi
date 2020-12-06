import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class LogIn extends Component {
  state = {
            name: '',
            password: '',
            message: ''
          }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {

    const { name, password,message } = this.state;


    

  }

  render() {
    const { name, password,  message } = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>

          <Form.Group>

            <Form.Input
              placeholder='Name'
              name='name'
              value={name}
              onChange={this.handleChange}
            />

            <Form.Input 
              placeholder='Password'
              name='password'
              value={password}
              onChange={this.handleChange}
              type="password"
            />


            <Form.Button content='Submit' />

          </Form.Group>
          
        </Form>

        <h2>{message}</h2>
      </div>
    )
  }
}

export default LogIn
