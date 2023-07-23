import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import AboutDetailsPage from './AboutDetailsPage';
import Card from '../../components/shared/Card';

function AboutMainPage() {
  const { sm, md } = useBreakpoint();

  const maxCardWidth = md ? '600px' : sm ? '400px' : '300px';

  return (
    <Card width={maxCardWidth}>
      <AboutDetailsPage />
    </Card>
  );
}

export default AboutMainPage;
