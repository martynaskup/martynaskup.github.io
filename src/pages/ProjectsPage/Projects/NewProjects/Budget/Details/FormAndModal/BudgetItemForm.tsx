import { Formik } from 'formik';
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  SubmitButton,
} from 'formik-antd';
import moment from 'moment';
import { Button, Space } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { budgetItemFormValidationSchema } from './budgetItemFormValidationSchema';
import { BudgetItemData, BudgetItemType } from '../BudgetItemTypes';
import { budgetItemName, budgetItemNameLowecase } from '../budgetItemHelpers';

type BudgetItemFormProps = {
  onFormSubmit: (income: BudgetItemData) => void;
  hideModal: () => void;
  type: BudgetItemType;
  values?: BudgetItemData;
};

function BudgetItemForm({
  onFormSubmit,
  hideModal,
  type,
  values,
}: BudgetItemFormProps) {
  const initialValues: BudgetItemData = {
    id: '',
    name: '',
    date: moment(),
    value: 0,
  };

  const isInEditMode = !!values;

  return (
    <Formik<BudgetItemData>
      initialValues={values ?? initialValues}
      onSubmit={(values) => {
        onFormSubmit({
          id: isInEditMode ? values.id : uuidv4(),
          name: values.name,
          value: values.value,
          date: moment(values.date) ?? moment(),
        });
        hideModal();
      }}
      validationSchema={budgetItemFormValidationSchema}
    >
      {(props) => (
        <Form
          preserve={false} // required when setting destroyOnClose in Modal component if Modal is used with Form in order to reset the values
        >
          <Form.Item name="name" label={`${budgetItemName(type)} title`}>
            <Input
              name="name"
              placeholder={`${budgetItemName(type)} title`}
              suffix={<span />}
            />
          </Form.Item>
          <Form.Item name="value" label="Value">
            <InputNumber
              name="value"
              precision={2}
              step={0.01}
              style={{
                width: '150px',
              }}
              addonAfter="€"
            />
          </Form.Item>
          <Form.Item
            name="date"
            label={`Date of the ${budgetItemNameLowecase(type)}`}
          >
            <DatePicker
              name="date"
              allowClear={false}
              disabledDate={(date) =>
                date.isBefore(moment().startOf('month')) ||
                date.isAfter(moment().endOf('month'))
              }
            />
          </Form.Item>
          <Space style={{ width: '100%', justifyContent: 'end' }}>
            <SubmitButton onSubmit={() => props.submitForm()}>
              {`${isInEditMode ? 'Update' : 'Add'} ${budgetItemNameLowecase(
                type
              )}`}
            </SubmitButton>
            <Button onClick={hideModal}>Cancel</Button>
          </Space>
        </Form>
      )}
    </Formik>
  );
}

export default BudgetItemForm;
