import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class SignUp extends Component {
  state = {
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
            message: ''
          }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {

    const { name, email, password, repeatPassword, message } = this.state

    var isValid = true;  
    

    if((password.length > 8 && password.length < 20) || !password){
      
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
    


    if(isValid && message.length === 0){
      this.setState({message: "Success!!!"});
    }

  }

  render() {
    const { name, email, password, repeatPassword, message } = this.state

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
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
              
            />

            <Form.Input 
              placeholder='Password'
              name='password'
              value={password}
              onChange={this.handleChange}
              type="password"
            />

            <Form.Input 
              placeholder='Repeat Password'
              name='repeatPassword'
              value={repeatPassword}
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

export default SignUp
