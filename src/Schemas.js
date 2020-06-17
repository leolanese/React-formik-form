import * as Yup from 'yup';

export const LoginSchema =
  Yup.object().shape({
    loginName: Yup.string()
      .min(5, 'Needs 5 characters')
      .max(25, 'Max 25 chartacters')
      .required('Required'),
    loginPassword: Yup.string()
      .min(3, 'Needs 3 characters')
      .required('Required'),
  });