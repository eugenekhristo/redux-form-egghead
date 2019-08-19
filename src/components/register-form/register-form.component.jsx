import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { CustomInput, CustomSelect } from './fields/index';
import { validate } from './validation';

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="firstname"
          type="text"
          component={CustomInput}
          label="Firstname"
        />
        <Field
          name="surname"
          type="text"
          component={CustomInput}
          label="Surname"
        />
        <Field
          name="username"
          type="text"
          component={CustomInput}
          label="Username"
        />
        <Field
          name="preference"
          component={CustomSelect}
          label="Preferred formatting"
        />
        <Field
          name="newsletteres"
          type="checkbox"
          component={CustomInput}
          label="Sign up for newsletters?"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({ form: 'register', validate })(RegisterForm);
