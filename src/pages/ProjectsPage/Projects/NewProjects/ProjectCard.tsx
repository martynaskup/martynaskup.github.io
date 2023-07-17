import { Card, CardProps, Typography } from 'antd';
import { StyledCard } from './Overview.styles';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

type ProjectCardProps = {
  techStack: string;
  children: React.ReactNode;
} & CardProps;

function ProjectCard({ techStack, children, ...props }: ProjectCardProps) {
  const { sm } = useBreakpoint();

  return (
    <StyledCard {...props} style={{ width: sm ? '500px' : '300px' }}>
      <Card.Meta description={`TechStack: ${techStack}`} />
      <Typography.Text>{children}</Typography.Text>
    </StyledCard>
  );
}

export default ProjectCard;
