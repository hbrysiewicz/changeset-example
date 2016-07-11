import {
  validatePresence,
  validateLength,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  firstName: [
    validatePresence(true),
    validateLength({ min: 4 })
  ],
  lastName: validatePresence(true),
  email: validateFormat({ type: 'email' }),
  twitter: validatePresence(true),
  github: validatePresence(true)
};
