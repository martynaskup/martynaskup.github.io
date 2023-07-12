import { FC, useEffect, useState } from 'react';
import { Collapse } from 'antd';
import OutcomeList from './OutcomeList';
import { OutcomeData } from './IncomeOutcomeTypes';
import { initialOutcomes } from './initialData';

const Outcomes: FC<{
  onValuesChange: (newOutcomeTotal: number) => void;
}> = ({ onValuesChange }) => {
  const [outcomeList, setOutcomeList] = useState(initialOutcomes);

  useEffect(() => {
    const totalOutcome = outcomeList.reduce((acc, outcome) => {
      return acc + outcome.value;
    }, 0);
    onValuesChange(totalOutcome);
  }, [outcomeList, onValuesChange]);

  const handleNewOutcome = (outcome: OutcomeData) => {
    setOutcomeList((prevOutcomesList) => {
      const newOutcomeList = [...prevOutcomesList, outcome];
      return sortOutcomeList(newOutcomeList);
    });

    onValuesChange(outcome.value);
  };

  const handleOutcomeUpdate = (updatedOutcome: OutcomeData) => {
    setOutcomeList((prevOutcomeList) => {
      return prevOutcomeList.map((outcome) =>
        outcome.id === updatedOutcome.id ? updatedOutcome : outcome
      );
    });
    onValuesChange(updatedOutcome.value);
  };

  return (
    <>
      <Collapse defaultActiveKey={['1']} style={{ textAlign: 'left' }}>
        <Collapse.Panel
          header="Outcome items"
          key="1"
          // extra={<AddButtonAndModal onNewOutcome={handleNewOutcome} />}
        >
          <OutcomeList
            outcomeList={sortOutcomeList(outcomeList)}
            onOutcomeUpdate={handleOutcomeUpdate}
          />
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

const sortOutcomeList = (list: OutcomeData[]) => {
  return list.sort((outcomeA, outcomeB) =>
    outcomeB.date.isBefore(outcomeA.date) ? 1 : -1
  );
};

export default Outcomes;
