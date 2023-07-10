import { FC } from 'react';
import { Formik } from 'formik';
import { IncomeData } from './Incomes';
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  ResetButton,
  SubmitButton,
} from 'formik-antd';
import moment from 'moment';
import { addIncomeFormValidationSchema } from './AddIncomeFormValidationSchema';

const AddIncomeForm: FC<{ onSubmit: (income: IncomeData) => void }> = ({
  onSubmit,
}) => {
  const initialValues: IncomeData = {
    name: '',
    date: moment(),
    price: 0,
  };

  return (
    <Formik<IncomeData>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={addIncomeFormValidationSchema}
    >
      {(props) => (
        <Form>
          <Form.Item name="name" label="Income title">
            <Input name="name" placeholder="income name" suffix={<span />} />
          </Form.Item>
          <Form.Item name="price" label="Price">
            <InputNumber name="price" formatter={(value) => `${value} €`} />
          </Form.Item>
          <Form.Item name="date" label="Date of the income">
            <DatePicker name="date" />
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
};

export default AddIncomeForm;
