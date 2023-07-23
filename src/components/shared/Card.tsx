import { StyledCard } from './Card.styles';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { CardProps } from 'antd';

interface ThisCardProps extends CardProps {
  width?: string | number;
  textAlign?: 'left' | 'center';
}

function Card({ width, textAlign, children }: ThisCardProps) {
  const { sm, md } = useBreakpoint();

  const cardWidth = md ? '600px' : sm ? '400px' : '300px';

  return (
    <StyledCard
      style={{ width: width ?? cardWidth, textAlign: textAlign ?? 'left' }}
    >
      {children}
    </StyledCard>
  );
}

export default Card;
