import { FC } from 'react';
import { Formik } from 'formik';
import { IncomeData } from './Incomes';
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  SubmitButton,
} from 'formik-antd';
import moment from 'moment';
import { addIncomeFormValidationSchema } from './AddIncomeFormValidationSchema';
import { Button, Space } from 'antd';

const AddIncomeForm: FC<{
  onFormSubmit: (income: IncomeData) => void;
  hideModal: () => void;
}> = ({ onFormSubmit, hideModal }) => {
  const initialValues: IncomeData = {
    name: '',
    date: moment(),
    price: 0,
  };

  return (
    <Formik<IncomeData>
      initialValues={initialValues}
      onSubmit={(values, formikHelpers) => {
        onFormSubmit({
          name: values.name,
          price: values.price,
          date: moment(values.date) ?? moment(),
        });
        formikHelpers.resetForm();
        hideModal();
      }}
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
            <DatePicker name="date" allowClear={false} />
          </Form.Item>
          <Space style={{ width: '100%', justifyContent: 'end' }}>
            <SubmitButton onSubmit={() => props.submitForm()}>
              Add income
            </SubmitButton>
            <Button
              onClick={() => {
                props.resetForm();
                hideModal();
              }}
            >
              Cancel
            </Button>
          </Space>
        </Form>
      )}
    </Formik>
  );
};

export default AddIncomeForm;
