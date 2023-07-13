import { useState } from 'react';
import { Button, Tooltip } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import BudgetItemModal from './FormAndModal/BudgetItemModal';
import { BudgetItemData, BudgetItemType } from './BudgetItemTypes';
import { budgetItemName, budgetItemNameLowecase } from './budgetItemHelpers';

type CreateButtonAndModalProps = {
  onNewItem: (item: BudgetItemData) => void;
  type: BudgetItemType;
};

function CreateButtonAndModal({ onNewItem, type }: CreateButtonAndModalProps) {
  const { lg } = useBreakpoint();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (show: boolean) => {
    setIsModalOpen(show);
  };

  const AddButton = () =>
    lg ? (
      <Button
        type="dashed"
        size="small"
        icon={<PlusCircleOutlined />}
        onClick={() => showModal(true)}
      >
        Add {budgetItemName(type)}
      </Button>
    ) : (
      <Tooltip title={`Add ${budgetItemNameLowecase(type)}`}>
        <Button
          type="text"
          size="small"
          icon={<PlusCircleOutlined />}
          onClick={() => showModal(true)}
        />
      </Tooltip>
    );

  return (
    <div onClick={(event) => event.stopPropagation()}>
      <AddButton />
      <BudgetItemModal
        isModalOpen={isModalOpen}
        hideModal={() => showModal(false)}
        onModalSubmit={onNewItem}
        type={type}
      />
    </div>
  );
}

export default CreateButtonAndModal;
