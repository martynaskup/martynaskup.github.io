import { FC, useState } from 'react';
import { Button, List, Tooltip } from 'antd';
import { OutcomeData } from './Outcomes';
import { EditOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import IncomeOutcomeModal from './FormAndModal/IncomeOutcomeModal';

type OutcomeListProps = {
  outcomeList: OutcomeData[];
  onOutcomeUpdate: (updatedOutcome: OutcomeData) => void;
};
const OutcomeList: FC<OutcomeListProps> = ({
  outcomeList,
  onOutcomeUpdate,
}) => {
  const { lg } = useBreakpoint();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [outcomeForUpdate, setOutcomeForUpdate] = useState<
    OutcomeData | undefined
  >(undefined);

  const showModal = (show: boolean) => {
    setIsModalOpen(show);
  };

  return (
    <>
      <List
        size="small"
        dataSource={outcomeList}
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
                      setOutcomeForUpdate(item);
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
                        setOutcomeForUpdate(item);
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
          type="outcome"
          isModalOpen={isModalOpen}
          onModalSubmit={onOutcomeUpdate}
          hideModal={() => showModal(false)}
          values={outcomeForUpdate}
        />
      )}
    </>
  );
};

export default OutcomeList;
