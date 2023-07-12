import { FC, useState } from 'react';
import { Button, List, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import BudgetItemModal from './FormAndModal/BudgetItemModal';
import { BudgetItemData, BudgetItemType } from './BudgetItemTypes';

type BudgetItemProps = {
  sourceData: BudgetItemData[];
  onItemUpdate: (updatedItem: BudgetItemData) => void;
  budgetItemType: BudgetItemType;
};

const BudgetItemList: FC<BudgetItemProps> = ({
  sourceData,
  onItemUpdate,
  budgetItemType,
}) => {
  const { lg } = useBreakpoint();
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
            style={{ paddingRight: 0 }}
            actions={[
              <>
                {lg ? (
                  <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={() => {
                      showModal(true);
                      setItemToBeUpdated(item);
                    }}
                  >
                    Edit
                  </Button>
                ) : (
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
                )}
              </>,
            ]}
            key={item.id}
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
