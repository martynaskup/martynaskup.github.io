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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const AddButton = () =>
    lg ? (
      <Button
        type="dashed"
        size="small"
        icon={<PlusCircleOutlined />}
        onClick={showModal}
      >
        Add income
      </Button>
    ) : (
      <Tooltip title="Add income">
        <Button
          type="text"
          size="small"
          icon={<PlusCircleOutlined />}
          onClick={showModal}
        />
      </Tooltip>
    );

  return (
    <div onClick={(event) => event.stopPropagation()}>
      <AddButton />
      <Modal
        title="Add income"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddIncomeForm onSubmit={onAction} />
      </Modal>
    </div>
  );
};

export default AddButtonAndModal;
