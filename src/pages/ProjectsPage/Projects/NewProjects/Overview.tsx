import ProjectCard from './ProjectCard';
import budgetImage from '../../../../assets/images/projectScreenshots/budget.png';
import { StyledCarousel } from './Overview.styles';
import { Link } from 'react-router-dom';
import paths, { generatePathToPage } from '../../../../routes/paths';
import { ArrowRightOutlined } from '@ant-design/icons';
import NewProjectPlaceholder from './NewProjectPlaceholder';

function Overview() {
  return (
    <StyledCarousel
      dotPosition="top"
      dots={true}
      style={{ textAlign: 'center' }}
    >
      <div>
        <ProjectCard
          cover={<img alt="budget app screenshot" src={budgetImage} />}
          techStack="HTML, CSS, React, styled components, Ant Design... "
          title="Budget App"
          children="With this app, you can track your monthly expenses and incomes."
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
