import { Collapse } from 'antd';
import CreateButtonAndModal from './CreateButtonAndModal';
import { BudgetItemData, BudgetItemType } from './BudgetItemTypes';
import BudgetItemList from './BudgetItemList';
import { budgetItemName, sortItemList } from './budgetItemHelpers';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

type BudgetItemsCollapseProps = {
  budgetItemType: BudgetItemType;
  itemList: BudgetItemData[];
  onNewItemCreate: (newItem: BudgetItemData) => void;
  onItemUpdate: (updatedItem: BudgetItemData) => void;
  onItemDelete: (item: BudgetItemData) => void;
};

function BudgetItemsCollapse({
  budgetItemType,
  itemList,
  onNewItemCreate,
  onItemUpdate,
  onItemDelete,
}: BudgetItemsCollapseProps) {
  const { md } = useBreakpoint();

  return (
    <Collapse defaultActiveKey={['1']} style={{ textAlign: 'left' }}>
      {
        <Collapse.Panel
          header={`${budgetItemName(budgetItemType)} items`}
          key={md ? '1' : '0'} // initially open the panel or keep it closed depending on the breakpoint width
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
      }
    </Collapse>
  );
}

export default BudgetItemsCollapse;
