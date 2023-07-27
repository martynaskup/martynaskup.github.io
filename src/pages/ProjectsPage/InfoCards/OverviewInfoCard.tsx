import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { Space } from 'antd';
import ProjectInfoCard from '../../../components/shared/ProjectInfoCard';
import Text from '../../../components/shared/Text';

function OverviewInfoCard() {
  const { sm } = useBreakpoint();

  return (
    <Space direction="vertical" size={sm ? 'large' : 'small'} align="center">
      <ProjectInfoCard
        title="My Coding Skills"
        children={
          <Space direction="vertical" size="middle">
            <Text children="In this section, I would like to present a few projects to you." />
            <Text
              children="Some of them are older and are the result of my learning process
              from when I was working on becoming a front-end developer."
            />
            <Text
              children="The others are newer, created this year. I utilized the skills and
              technologies developed and learned over the last 3 years while
              working as a front-end developer."
            />
            <Text
              children="To explore the projects, you have two options: either use the dots
              at the top of the page to navigate to a specific slide, or access the Menu,
              go to the Projects submenu, and choose the project you would like to view"
            />
          </Space>
        }
      />
    </Space>
  );
}

export default OverviewInfoCard;
