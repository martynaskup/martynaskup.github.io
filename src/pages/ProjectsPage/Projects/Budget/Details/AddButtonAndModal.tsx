import { FC, useState } from 'react';
import { Button, Modal, Tooltip } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { IncomeData } from './Incomes';
import AddIncomeForm from './AddIncomeForm';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const AddButtonAndModal: FC<{ onAction: (income: IncomeData) => void }> = ({
  onAction,
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
      <Modal title="Add income" open={isModalOpen} footer={null}>
        <AddIncomeForm
          onFormSubmit={(income) => {
            onAction(income);
          }}
          hideModal={() => showModal(false)}
        />
      </Modal>
    </div>
  );
};

export default AddButtonAndModal;
