import { Button, Card, CardProps, Typography } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { ReactNode } from 'react';
import { StyledCard } from './ProjectCard.styles';

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
  const { sm, md } = useBreakpoint();
  const cardWidth = md ? '600px' : sm ? '400px' : '300px';

  return (
    <StyledCard
      {...props}
      extra={<Button key={1}>{link}</Button>}
      style={{ width: width ?? cardWidth, textAlign: textAlign ?? 'left' }}
    >
      {techStack ? <Card.Meta description={`TechStack: ${techStack}`} /> : null}
      <Typography.Text>{children}</Typography.Text>
    </StyledCard>
  );
}

export default ProjectCard;
