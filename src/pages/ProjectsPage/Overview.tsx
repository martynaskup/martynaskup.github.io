import { StyledCarousel } from './Overview.styles';
import NewProjectPlaceholder from './InfoCards/NewProjectPlaceholder';
import BudgetInfoCard from './InfoCards/BudgetInfoCard';
import OverviewInfoCard from './InfoCards/OverviewInfoCard';
import PreviousPortfolioInfoCard from './InfoCards/PreviousPortfolioInfoCard';

function Overview() {
  return (
    <StyledCarousel dotPosition="top" dots={true}>
      <div style={{ margin: '50px auto 24px' }}>
        <OverviewInfoCard />
      </div>
      <div>
        <PreviousPortfolioInfoCard />
      </div>
      <div>
        <BudgetInfoCard />
      </div>
      <div>
        <NewProjectPlaceholder />
      </div>
    </StyledCarousel>
  );
}

export default Overview;
