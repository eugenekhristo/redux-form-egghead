import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import RegisterForm from './components/register-form/register-form.component';

class RegisterFormContainer extends Component {
  handleSubmit = values => {
    if (['serj', 'daron', 'eugene', 'millie'].includes(values.username)) {
      throw new SubmissionError({
        username: 'This username already taken'
      });
    } else {
      window.alert(JSON.stringify(values, null, 4));
    }
  };
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
