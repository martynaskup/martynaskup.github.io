import { Button, Modal } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

const AddButtonAndModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsModalOpen(true);
    event.stopPropagation();
  };

  const handleOk = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsModalOpen(false);
    event.stopPropagation();
  };

  const handleCancel = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsModalOpen(false);
    event.stopPropagation();
  };

  return (
    <>
      <Button
        type="text"
        size="small"
        icon={<PlusCircleOutlined />}
        onClick={(event) => {
          showModal(event);
          // event.stopPropagation();
        }}
      >
        Add income
      </Button>
      <Modal
        title="Add income"
        open={isModalOpen}
        onOk={(event) => handleOk(event)}
        onCancel={(event) => handleCancel(event)}
      >
        here comes the form to add an income
      </Modal>
    </>
  );
};

export default AddButtonAndModal;
