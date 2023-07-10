import * as yup from 'yup';

export const addIncomeFormValidationSchema = yup.object({
  name: yup.string().required('Income title is required'),
  value: yup
    .number()
    .required('Income value is required')
    .positive('Income value must be greater than 0'),
});
