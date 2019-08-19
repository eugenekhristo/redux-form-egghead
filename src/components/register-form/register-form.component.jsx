import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <Field name="name" type="text" component="input" />
        </div>
        <div>
          <label>Preferred formatting</label>
          <Field name="preference" component="select">
            <option />
            <option value="tabs">Tabs</option>
            <option value="spaces">Spaces</option>
          </Field>
        </div>
        <div>
          <label>Sign up for letters?</label>
          <Field type="checkbox" name="letteres" component="input" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({ form: 'register' })(RegisterForm);
