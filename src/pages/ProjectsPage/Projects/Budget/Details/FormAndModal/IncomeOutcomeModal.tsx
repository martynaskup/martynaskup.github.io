import { Modal } from 'antd';
import AddIncomeForm from './AddIncomeForm';
import { FC } from 'react';
import { IncomeData } from '../Incomes';
import { OutcomeData } from '../Outcomes';
import { CloseOutlined } from '@ant-design/icons';

type IncomeOutcomeModalProps = {
  isModalOpen: boolean;
  onModalSubmit: (income: IncomeData | OutcomeData) => void;
  hideModal: () => void;
  values?: IncomeData;
  type: 'income' | 'outcome';
};

const IncomeOutcomeModal: FC<IncomeOutcomeModalProps> = ({
  isModalOpen,
  onModalSubmit,
  hideModal,
  values,
  type,
}) => {
  const isInEditMode = !!values;
  return (
    <Modal
      title={`${isInEditMode ? 'Update' : 'Add'} ${type}`}
      open={isModalOpen}
      footer={null}
      destroyOnClose
      closeIcon={<CloseOutlined onClick={hideModal} />}
    >
      <AddIncomeForm
        onFormSubmit={(income) => {
          onModalSubmit(income);
        }}
        hideModal={hideModal}
        values={values}
      />
    </Modal>
  );
};

export default IncomeOutcomeModal;
