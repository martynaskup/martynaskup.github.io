import { FC, useState } from 'react';
import { Button, List, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import BudgetItemModal from './FormAndModal/BudgetItemModal';
import { BudgetItemData, BudgetItemType } from './BudgetItemTypes';

type BudgetItemProps = {
  sourceData: BudgetItemData[];
  onItemUpdate: (updatedItem: BudgetItemData) => void;
  onItemDelete: (item: BudgetItemData) => void;
  budgetItemType: BudgetItemType;
};

const BudgetItemList: FC<BudgetItemProps> = ({
  sourceData,
  onItemUpdate,
  onItemDelete,
  budgetItemType,
}) => {
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
                      onItemDelete(item);
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
};

export default BudgetItemList;
