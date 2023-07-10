import { FC } from 'react';
import { Button, List, Tooltip } from 'antd';
import { IncomeData } from './Incomes';
import { EditOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const IncomeList: FC<{ incomeList: IncomeData[] }> = ({ incomeList }) => {
  const { lg } = useBreakpoint();
  return (
    <List
      size="small"
      dataSource={incomeList}
      renderItem={(item) => (
        <List.Item
          style={{ paddingRight: 0 }}
          actions={[
            lg ? (
              <Button type="text" icon={<EditOutlined />}>
                Edit
              </Button>
            ) : (
              <Tooltip title="Edit">
                <Button type="text" icon={<EditOutlined />} />
              </Tooltip>
            ),
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
