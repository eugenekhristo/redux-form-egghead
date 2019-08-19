import React, { Component } from 'react';
import RegisterForm from './components/register-form/register-form.component';

class RegisterFormContainer extends Component {
  handleSubmit = values => window.alert(JSON.stringify(values, null, 4));
  getInitialValues = () => ({
    preference: 'tabs',
    newsletteres: true
  });

  render() {
    return (
      <RegisterForm
        onSubmit={this.handleSubmit}
        initialValues={this.getInitialValues()}
      />
    );
  }
}

export default RegisterFormContainer;
