import * as yup from 'yup';

export const createIncomeFormValidationSchema = yup.object({
  name: yup.string().required('Title is required'),
  value: yup
    .number()
    .required('Value is required')
    .positive('Value must be greater than 0'),
});
