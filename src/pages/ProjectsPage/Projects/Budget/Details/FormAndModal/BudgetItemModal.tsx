import { Modal } from 'antd';
import BudgetItemForm from './BudgetItemForm';
import { CloseOutlined } from '@ant-design/icons';
import { BudgetItemData, BudgetItemType } from '../BudgetItemTypes';

type BudgetItemModalProps = {
  isModalOpen: boolean;
  onModalSubmit: (income: BudgetItemData) => void;
  hideModal: () => void;
  type: BudgetItemType;
  values?: BudgetItemData;
};

function BudgetItemModal({
  isModalOpen,
  onModalSubmit,
  hideModal,
  type,
  values,
}: BudgetItemModalProps) {
  const isInEditMode = !!values;
  return (
    <Modal
      title={`${isInEditMode ? 'Update' : 'Add'} ${type}`}
      open={isModalOpen}
      footer={null}
      destroyOnClose
      closeIcon={<CloseOutlined onClick={hideModal} />}
    >
      <BudgetItemForm
        onFormSubmit={(income) => {
          onModalSubmit(income);
        }}
        hideModal={hideModal}
        values={values}
        type={type}
      />
    </Modal>
  );
}

export default BudgetItemModal;
