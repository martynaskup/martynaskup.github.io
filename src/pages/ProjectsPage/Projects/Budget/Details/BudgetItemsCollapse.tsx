import { Collapse } from 'antd';
import CreateButtonAndModal from './CreateButtonAndModal';
import { BudgetItemData, BudgetItemType } from './BudgetItemTypes';
import BudgetItemList from './BudgetItemList';
import { FC } from 'react';
import { budgetItemName, sortItemList } from './budgetItemHelpers';

type BudgetItemsCollapseProps = {
  budgetItemType: BudgetItemType;
  itemList: BudgetItemData[];
  onNewItemCreate: (newItem: BudgetItemData) => void;
  onItemUpdate: (updatedItem: BudgetItemData) => void;
  onItemDelete: (item: BudgetItemData) => void;
};
const BudgetItemsCollapse: FC<BudgetItemsCollapseProps> = ({
  budgetItemType,
  itemList,
  onNewItemCreate,
  onItemUpdate,
  onItemDelete,
}) => (
  <Collapse defaultActiveKey={['1']} style={{ textAlign: 'left' }}>
    <Collapse.Panel
      header={`${budgetItemName(budgetItemType)} items`}
      key="1"
      extra={
        <CreateButtonAndModal
          onNewItem={onNewItemCreate}
          type={budgetItemType}
        />
      }
    >
      <BudgetItemList
        sourceData={sortItemList(itemList)}
        onItemUpdate={onItemUpdate}
        onItemDelete={onItemDelete}
        budgetItemType={budgetItemType}
      />
    </Collapse.Panel>
  </Collapse>
);

export default BudgetItemsCollapse;
