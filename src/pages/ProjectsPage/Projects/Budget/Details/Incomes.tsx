import { Dispatch, FC, SetStateAction } from 'react';

const Incomes: FC<{
  onValuesChange: Dispatch<SetStateAction<number>>;
}> = () => {
  return <>incomes items</>;
};

export default Incomes;
