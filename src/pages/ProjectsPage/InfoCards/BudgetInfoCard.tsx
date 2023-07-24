import ProjectCard from '../../../components/shared/ProjectCard';
import budgetImage from '../../../assets/images/projectScreenshots/budget.png';
import { Link } from 'react-router-dom';
import paths, { generatePathToPage } from '../../../routes/paths';
import { ArrowRightOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import Text from '../../../components/shared/Text';

function BudgetInfoCard() {
  const { sm } = useBreakpoint();
  return (
    <ProjectCard
      title="Budget App"
      width={sm ? '500px' : '300px'}
      cover={<img alt="budget app screenshot" src={budgetImage} />}
      link={
        <Link to={generatePathToPage(paths.projectsPaths.budget)}>
          View <ArrowRightOutlined />
        </Link>
      }
      techStack="Typescript, React, React Hooks, Ant Design, styled components, moment.js, Ant Design (v4), uuid library (v4)"
      children={
        <>
          <Text children="With this app, you can track your expenses and incomes for the current month" />
          <Text
            children={
              <ul>
                <li>
                  You can add, edit, and delete your incomes and expenses.
                </li>
                <li>
                  The app restricts adding incomes or expenses with dates before
                  or after the current month.
                </li>
                <li>
                  It will display the total incomes, total expenses, and the
                  remaining balance for the month. Additionally, the app will
                  show the number of days left until the end of the month.
                </li>
                <li>
                  The app includes budget examples as part of its design,
                  serving as a demo version
                </li>
                <li>
                  Being a demo app, data is not stored in any external database
                  or local storage.
                </li>
              </ul>
            }
          />
        </>
      }
    />
  );
}

export default BudgetInfoCard;
