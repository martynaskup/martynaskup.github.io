import { Modal } from 'antd';
import AddIncomeForm from './AddIncomeForm';
import { FC } from 'react';
import { IncomeData } from '../Incomes';

type IncomeModalProps = {
  isModalOpen: boolean;
  onNewIncome: (income: IncomeData) => void;
  showModal: (show: boolean) => void;
  values?: IncomeData;
};

const IncomeModal: FC<IncomeModalProps> = ({
  isModalOpen,
  onNewIncome,
  showModal,
  values,
}) => {
  return (
    <Modal title="Add income" open={isModalOpen} footer={null} destroyOnClose>
      <AddIncomeForm
        onFormSubmit={(income) => {
          onNewIncome(income);
        }}
        hideModal={() => showModal(false)}
        values={values}
      />
    </Modal>
  );
};

export default IncomeModal;
