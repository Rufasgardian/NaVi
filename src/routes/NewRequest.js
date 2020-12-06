import React from "react";
import { Form } from "semantic-ui-react";

class newRequest extends React.Component {
  state = {
    input: "",
  };

  handleSubmit = () => {
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
    fetch("http://0f899f22e5ee.ngrok.io/api/requests/userrequests_list/", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify({
        text: this.state.input,
        answer: "",
      }),
    })
      .then((token) => console.log("Token: ", token))
      .catch(console.error);
  };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <textarea
              name="textarea"
              rows="10"
              cols="10"
              value={this.state.input}
              onChange={(event) => this.setState({ input: event.target.value })}
            />
            <br />
            <Form.Button content="Submit" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default newRequest;
