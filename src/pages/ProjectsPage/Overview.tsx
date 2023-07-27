import { StyledCarousel } from './Overview.styles';
import ProjectPlaceholderInfoCard from './InfoCards/ProjectPlaceholderInfoCard';
import BudgetInfoCard from './InfoCards/BudgetInfoCard';
import OverviewInfoCard from './InfoCards/OverviewInfoCard';
import PreviousPortfolioInfoCard from './InfoCards/PreviousPortfolioInfoCard';
import NewPortfolioInfoCard from './InfoCards/NewPortfolioInfoCard';

function Overview() {
  return (
    <StyledCarousel dotPosition="top" dots={true}>
      <div>
        <OverviewInfoCard />
      </div>
      <div>
        <NewPortfolioInfoCard />
      </div>
      <div>
        <PreviousPortfolioInfoCard />
      </div>
      <div>
        <BudgetInfoCard />
      </div>
      <div>
        <ProjectPlaceholderInfoCard />
      </div>
    </StyledCarousel>
  );
}

export default Overview;
