import React, { Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import capitalize from 'capitalize';
import './register-form.styles.css';
import { CustomInput, CustomSelect, discounts } from './fields/index';
import { required, minLength, maxLength, matchesPasswords } from './validation';
import { asyncValidate } from './validation';

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
          validate={[required]}
          normalize={capitalize}
        />
        <Field
          name="surname"
          type="text"
          component={CustomInput}
          label="Surname"
          validate={[required]}
          normalize={capitalize}
        />
        <Field
          name="username"
          type="text"
          component={CustomInput}
          label="Username"
          validate={[required, minLength, maxLength]}
        />
        <Field
          name="password"
          type="password"
          component={CustomInput}
          label="Password"
          validate={[required]}
        />
        <Field
          name="passwordConfirm"
          type="password"
          component={CustomInput}
          label="Confirm Password"
          validate={[required, matchesPasswords]}
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
        <FieldArray name="discountCodes" component={discounts} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'register',
  asyncValidate: asyncValidate,
  asyncBlurFields: ['username']
})(RegisterForm);
