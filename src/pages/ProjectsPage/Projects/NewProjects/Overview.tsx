import { StyledCarousel } from './Overview.styles';
import NewProjectPlaceholder from './NewProjectPlaceholder';
import BudgetOverviewCard from './BudgetOverviewCard';

function Overview() {
  return (
    <StyledCarousel dotPosition="top" dots={true}>
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
