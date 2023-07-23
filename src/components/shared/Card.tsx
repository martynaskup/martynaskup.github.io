import { StyledCard } from './Card.styles';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { CardProps } from 'antd';

function Card({ children }: CardProps) {
  const { md } = useBreakpoint();

  return (
    <StyledCard style={{ maxWidth: md ? '700px' : '300px' }}>
      {children}
    </StyledCard>
  );
}

export default Card;
