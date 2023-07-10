import { FC, useState } from 'react';
import { Button, List, Tooltip } from 'antd';
import { IncomeData } from './Incomes';
import { EditOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import IncomeModal from './FormAndModal/IncomeModal';

const IncomeList: FC<{ incomeList: IncomeData[] }> = ({ incomeList }) => {
  const { lg } = useBreakpoint();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (show: boolean) => {
    setIsModalOpen(show);
  };

  const handleItemChange = (item: IncomeData) => {
    console.log('item', item);
    console.log('incomeList', incomeList);
  };

  return (
    <List
      size="small"
      dataSource={incomeList}
      renderItem={(item) => (
        <List.Item
          style={{ paddingRight: 0 }}
          actions={[
            <>
              {lg ? (
                <Button
                  type="text"
                  icon={<EditOutlined />}
                  onClick={() => showModal(true)}
                >
                  Edit
                </Button>
              ) : (
                <Tooltip title="Edit">
                  <Button
                    type="text"
                    icon={<EditOutlined />}
                    onClick={() => showModal(true)}
                  />
                </Tooltip>
              )}
              <IncomeModal
                isModalOpen={isModalOpen}
                onNewIncome={handleItemChange}
                showModal={showModal}
                values={item}
              />
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
  );
};

export default IncomeList;
