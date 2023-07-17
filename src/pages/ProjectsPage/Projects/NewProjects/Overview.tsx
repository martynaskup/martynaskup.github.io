import ProjectCard from './ProjectCard';
import budgetImage from '../../../../assets/images/projectScreenshots/budget.png';
import { StyledCarousel } from './Overview.styles';
import { Link } from 'react-router-dom';
import paths, { generatePathToPage } from '../../../../routes/paths';
import { ArrowRightOutlined } from '@ant-design/icons';
import NewProjectPlaceholder from './NewProjectPlaceholder';
import { Typography } from 'antd';

function Overview() {
  return (
    <StyledCarousel dotPosition="top" dots={true}>
      <div>
        <ProjectCard
          cover={<img alt="budget app screenshot" src={budgetImage} />}
          techStack="Typescript, React, React Hooks, Ant Design, styled components, Ant Design (v4), uuid library (v4)"
          title="Budget App"
          children={
            <>
              <Typography.Text>
                With this app, you can track your monthly expenses and incomes.
              </Typography.Text>
              <ul>
                <li>You can add, edit and delete your incomes and outcomes.</li>
                <li>
                  The app will show you the total incomes, total outcomes and
                  the total amount left in the month. It will show also how many
                  days are left until the end of the month.
                </li>
                <li>
                  The app contains budget examples by design, as it is a demo
                  version.
                </li>
                <li>
                  As it is a demo app, data is not stored in any external
                  database nor in the local storage.
                </li>
              </ul>
            </>
          }
          link={
            <Link to={generatePathToPage(paths.projectsPaths.budget)}>
              View <ArrowRightOutlined />
            </Link>
          }
        />
      </div>
      <div>
        <NewProjectPlaceholder />
      </div>
    </StyledCarousel>
  );
}

export default Overview;
