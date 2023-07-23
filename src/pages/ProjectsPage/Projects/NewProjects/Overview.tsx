import { StyledCarousel } from './Overview.styles';
import NewProjectPlaceholder from './NewProjectPlaceholder';
import BudgetOverviewCard from './BudgetOverviewCard';
import ProjectsOverview from '../../ProjectsOverview';
import PreviousPortfolio from '../PreviousPortfolio';

function Overview() {
  return (
    <StyledCarousel dotPosition="top" dots={true}>
      <div style={{ margin: '50px auto 24px' }}>
        <ProjectsOverview />
      </div>
      <div>
        <PreviousPortfolio />
      </div>
      <div>
        <BudgetOverviewCard />
      </div>
      <div>
        <NewProjectPlaceholder />
      </div>
    </StyledCarousel>
  );
}

export default Overview;
