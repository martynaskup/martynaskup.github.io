import { Modal } from 'antd';
import IncomeOutcomeForm from './IncomeOutcomeForm';
import { FC } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { IncomeOutcomeData, IncomeOutcomeType } from '../IncomeOutcomeTypes';

type IncomeOutcomeModalProps = {
  isModalOpen: boolean;
  onModalSubmit: (income: IncomeOutcomeData) => void;
  hideModal: () => void;
  type: IncomeOutcomeType;
  values?: IncomeOutcomeData;
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
