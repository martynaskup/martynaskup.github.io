import ProjectCard from './ProjectCard';
import budgetImage from '../../../../assets/images/projectScreenshots/budget.png';
import { StyledCarousel } from './Overview.styles';

function Overview() {
  const contentStyle: React.CSSProperties = {
    height: '160px',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.1)',
  };

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
        />
      </div>
      <div>
        <h2 style={contentStyle}>Project 2</h2>
      </div>
      <div>
        <h2 style={contentStyle}>Project 3</h2>
      </div>
      <div>
        <h2 style={contentStyle}>Project 4</h2>
      </div>
    </StyledCarousel>
  );
}

export default Overview;
