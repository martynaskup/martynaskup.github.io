import { Typography } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { TextProps } from 'antd/es/typography/Text';

interface TextResponsiveProps extends TextProps {
  children: React.ReactNode;
}

function Text({ children }: TextResponsiveProps) {
  const { xl, xxl } = useBreakpoint();

  return (
    <Typography.Text style={{ fontSize: xxl ? '15px' : xl ? '14px' : '12px' }}>
      {children}
    </Typography.Text>
  );
}

export default Text;
