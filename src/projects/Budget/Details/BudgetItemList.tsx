import { useState } from 'react';
import { Button, List, Modal, Tooltip } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import BudgetItemModal from './FormAndModal/BudgetItemModal';
import { BudgetItemData, BudgetItemType } from './BudgetItemTypes';
import { budgetItemNameLowecase } from './budgetItemHelpers';

type BudgetItemProps = {
  sourceData: BudgetItemData[];
  onItemUpdate: (updatedItem: BudgetItemData) => void;
  onItemDelete: (item: BudgetItemData) => void;
  budgetItemType: BudgetItemType;
};

function BudgetItemList({
  sourceData,
  onItemUpdate,
  onItemDelete,
  budgetItemType,
}: BudgetItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToBeUpdated, setItemToBeUpdated] = useState<
    BudgetItemData | undefined
  >(undefined);

  const showModal = (show: boolean) => {
    setIsModalOpen(show);
  };

  return (
    <>
      <List
        size="small"
        dataSource={sourceData}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            style={{ paddingRight: 0 }}
            actions={[
              <>
                <Tooltip title="Edit">
                  <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={() => {
                      showModal(true);
                      setItemToBeUpdated(item);
                    }}
                  />
                </Tooltip>
                <Tooltip title="Delete">
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      showDeleteConfirm(
                        () => onItemDelete(item),
                        budgetItemType,
                        item
                      );
                    }}
                  />
                </Tooltip>
              </>,
            ]}
          >
            <List.Item.Meta
              title={`${item.name}: ${item.value} €`}
              description={`Received date: ${item.date.format('DD-MM-YYYY')}`}
            />
          </List.Item>
        )}
      />
      {isModalOpen && (
        <BudgetItemModal
          type={budgetItemType}
          isModalOpen={isModalOpen}
          onModalSubmit={onItemUpdate}
          hideModal={() => showModal(false)}
          values={itemToBeUpdated}
        />
      )}
    </>
  );
}
function showDeleteConfirm(
  onItemDelete: () => void,
  budgetItemType: BudgetItemType,
  item: BudgetItemData
) {
  Modal.confirm({
    title: `Are you sure you want to delete this ${budgetItemNameLowecase(
      budgetItemType
    )}?`,
    icon: <ExclamationCircleOutlined />,
    content: `${item.name}: ${item.value} €`,
    okText: 'Yes, delete',
    okType: 'danger',
    cancelText: 'No, cancel',
    onOk() {
      onItemDelete();
    },
    onCancel() {},
  });
}

export default BudgetItemList;
