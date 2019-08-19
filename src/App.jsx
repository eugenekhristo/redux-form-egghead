import React, { Component } from 'react';
import RegisterForm from './components/register-form/register-form.component';

class RegisterFormContainer extends Component {
  handleSubmit = values => window.alert(JSON.stringify(values, null, 4));

  render() {
    return <RegisterForm onSubmit={this.handleSubmit} />;
  }
}

export default RegisterFormContainer;
