import { Button, Card, CardProps } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { ReactNode } from 'react';
import { StyledCard } from './ProjectCard.styles';
import Text from './Text';
import Title from './Title';

type ProjectCardProps = {
  techStack?: string;
  link?: ReactNode;
  width?: string | number;
  textAlign?: 'left' | 'center';
  children: ReactNode;
} & CardProps;

function ProjectCard({
  techStack,
  link,
  children,
  width,
  textAlign,
  ...props
}: ProjectCardProps) {
  const { sm, md, xl, xxl } = useBreakpoint();
  const cardWidth = md ? '600px' : sm ? '400px' : '300px';

  return (
    <StyledCard
      {...props}
      title={<Title level={3} children={props.title} />}
      extra={<Button key={1}>{link}</Button>}
      style={{ width: width ?? cardWidth, textAlign: textAlign ?? 'left' }}
    >
      {techStack ? (
        <Card.Meta
          description={`TechStack: ${techStack}`}
          style={{ fontSize: xxl ? '17px' : xl ? '16px' : '14px' }}
        />
      ) : null}
      <Text children={children} />
    </StyledCard>
  );
}

export default ProjectCard;
