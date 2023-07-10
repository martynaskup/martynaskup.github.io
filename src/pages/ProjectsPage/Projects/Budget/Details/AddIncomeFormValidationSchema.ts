import * as yup from 'yup';

export const addIncomeFormValidationSchema = yup.object({
  name: yup.string().required('Income title is required'),
  price: yup.number().required('VIncome value is required').positive(),
});
