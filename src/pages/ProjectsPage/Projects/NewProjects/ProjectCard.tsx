import { Button, Card, CardProps, Typography } from 'antd';
import { StyledCard } from './Overview.styles';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { ReactNode } from 'react';

type ProjectCardProps = {
  techStack: string;
  link?: ReactNode;
  children: ReactNode;
} & CardProps;

function ProjectCard({
  techStack,
  link,
  children,
  ...props
}: ProjectCardProps) {
  const { sm } = useBreakpoint();

  return (
    <StyledCard
      {...props}
      extra={<Button key={1}>{link}</Button>}
      style={{ width: sm ? '500px' : '300px' }}
    >
      <Card.Meta description={`TechStack: ${techStack}`} />
      <Typography.Text>{children}</Typography.Text>
    </StyledCard>
  );
}

export default ProjectCard;
