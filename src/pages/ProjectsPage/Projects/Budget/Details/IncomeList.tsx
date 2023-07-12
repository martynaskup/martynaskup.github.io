import { FC, useState } from 'react';
import { Button, List, Tooltip } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import IncomeOutcomeModal from './FormAndModal/IncomeOutcomeModal';
import { IncomeData } from './IncomeOutcomeTypes';

type IncomeListProps = {
  incomeList: IncomeData[];
  onIncomeUpdate: (updatedIncome: IncomeData) => void;
};
const IncomeList: FC<IncomeListProps> = ({ incomeList, onIncomeUpdate }) => {
  const { lg } = useBreakpoint();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [incomeForUpdate, setIncomeForUpdate] = useState<
    IncomeData | undefined
  >(undefined);

  const showModal = (show: boolean) => {
    setIsModalOpen(show);
  };

  return (
    <>
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
                    onClick={() => {
                      showModal(true);
                      setIncomeForUpdate(item);
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
                        setIncomeForUpdate(item);
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
        <IncomeOutcomeModal
          type="income"
          isModalOpen={isModalOpen}
          onModalSubmit={onIncomeUpdate}
          hideModal={() => showModal(false)}
          values={incomeForUpdate}
        />
      )}
    </>
  );
};

export default IncomeList;
