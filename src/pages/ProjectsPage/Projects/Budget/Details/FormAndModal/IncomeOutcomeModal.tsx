import { Modal } from 'antd';
import IncomeOutcomeForm from './IncomeOutcomeForm';
import { FC } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { IncomeData, OutcomeData } from '../IncomeOutcomeTypes';

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
      <IncomeOutcomeForm
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
