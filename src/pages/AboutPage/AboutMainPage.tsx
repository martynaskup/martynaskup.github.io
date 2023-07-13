import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { StyledAboutRow } from './About.styles';
import { Col } from 'antd';
import MyImage from './MyImage';
import AboutDetailsPage from './AboutDetailsPage';

function AboutMainPage() {
  const { md } = useBreakpoint();

  return md ? (
    <StyledAboutRow
      justify="center"
      align="middle"
      gutter={{ sm: 32, md: 24, lg: 32 }}
    >
      <Col>
        <MyImage />
      </Col>
      <Col span={14}>
        <AboutDetailsPage />
      </Col>
    </StyledAboutRow>
  ) : (
    <Col>
      <MyImage />
      <AboutDetailsPage />
    </Col>
  );
}

export default AboutMainPage;
