import { Modal } from 'antd';
import IncomeOutcomeForm from './IncomeOutcomeForm';
import { FC } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { BudgetItemData, BudgetItemType } from '../IncomeOutcomeTypes';

type IncomeOutcomeModalProps = {
  isModalOpen: boolean;
  onModalSubmit: (income: BudgetItemData) => void;
  hideModal: () => void;
  type: BudgetItemType;
  values?: BudgetItemData;
};

const IncomeOutcomeModal: FC<IncomeOutcomeModalProps> = ({
  isModalOpen,
  onModalSubmit,
  hideModal,
  type,
  values,
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
      <IncomeOutcomeForm
        onFormSubmit={(income) => {
          onModalSubmit(income);
        }}
        hideModal={hideModal}
        values={values}
        type={type}
      />
    </Modal>
  );
};

export default IncomeOutcomeModal;
