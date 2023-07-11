import { Modal } from 'antd';
import AddIncomeForm from './AddIncomeForm';
import { FC } from 'react';
import { IncomeData } from '../Incomes';

type IncomeModalProps = {
  isModalOpen: boolean;
  onIncomeSubmit: (income: IncomeData) => void;
  hideModal: () => void;
  values?: IncomeData;
};

const IncomeModal: FC<IncomeModalProps> = ({
  isModalOpen,
  onIncomeSubmit,
  hideModal,
  values,
}) => {
  const isInEditMode = !!values;
  return (
    <Modal
      title={`${isInEditMode ? 'Update' : 'Add'} income`}
      open={isModalOpen}
      footer={null}
      destroyOnClose
    >
      <AddIncomeForm
        onFormSubmit={(income) => {
          onIncomeSubmit(income);
        }}
        hideModal={hideModal}
        values={values}
      />
    </Modal>
  );
};

export default IncomeModal;
