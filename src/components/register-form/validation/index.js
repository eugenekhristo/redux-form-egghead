export const required = value => (value ? undefined : 'This field is required');
export const minLength = value =>
  value.length <= 3 ? 'This field must be more than 3 chars' : undefined;
export const maxLength = value =>
  value.length >= 10 ? 'This field must be less than 10 chars' : undefined;

// export const validate = values => {
//   const errors = {};
//   const { firstname, surname, username } = values;

//   if (!firstname) {
//     errors.firstname = 'Firstname is required';
//   }

//   if (!surname) {
//     errors.surname = 'Surname is required';
//   }

//   if (!username) {
//     errors.username = 'Username is required';
//   } else if (username.length <= 3) {
//     errors.username = 'Username must be more than 3 chars';
//   } else if (username.length >= 10) {
//     errors.username = 'Username must be less than 10 chars';
//   }

//   return errors;
// };
