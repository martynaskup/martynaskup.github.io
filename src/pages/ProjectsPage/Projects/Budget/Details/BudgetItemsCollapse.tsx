import { Collapse } from 'antd';
import CreateButtonAndModal from './CreateButtonAndModal';
import { BudgetItemData, BudgetItemType } from './IncomeOutcomeTypes';
import BudgetItemList from './BudgetItemList';
import { FC } from 'react';
import { budgetItemName } from './IncomeOutcomeHelpers';

type BudgetItemsCollapseProps = {
  budgetItemType: BudgetItemType;
  itemList: BudgetItemData[];
  onNewItemCreate: (newItem: BudgetItemData) => void;
  onItemUpdate: (updatedItem: BudgetItemData) => void;
};
const BudgetItemsCollapse: FC<BudgetItemsCollapseProps> = ({
  budgetItemType,
  itemList,
  onNewItemCreate,
  onItemUpdate,
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
        budgetItemType={budgetItemType}
      />
    </Collapse.Panel>
  </Collapse>
);

export const sortItemList = (list: BudgetItemData[]) => {
  return list.sort((itemA, itemB) =>
    itemB.date.isBefore(itemA.date) ? 1 : -1
  );
};

export default BudgetItemsCollapse;
