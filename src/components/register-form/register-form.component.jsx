import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { CustomInput, CustomSelect } from './fields/index';

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" type="text" component={CustomInput} label="Name" />
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

export default reduxForm({ form: 'register' })(RegisterForm);
