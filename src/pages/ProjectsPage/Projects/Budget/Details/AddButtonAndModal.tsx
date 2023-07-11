import { FC, useState } from 'react';
import { Button, Tooltip } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { IncomeData } from './Incomes';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import IncomeModal from './FormAndModal/IncomeModal';

const AddButtonAndModal: FC<{ onNewIncome: (income: IncomeData) => void }> = ({
  onNewIncome,
}) => {
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
        Add income
      </Button>
    ) : (
      <Tooltip title="Add income">
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
      <IncomeModal
        isModalOpen={isModalOpen}
        hideModal={() => showModal(false)}
        onIncomeSubmit={onNewIncome}
      />
    </div>
  );
};

export default AddButtonAndModal;
