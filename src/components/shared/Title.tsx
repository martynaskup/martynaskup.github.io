import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';
import { ReactNode } from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

interface TitleCustomProps extends TitleProps {
  children: ReactNode;
}
function Title({ level, children }: TitleCustomProps) {
  const { lg, xxl } = useBreakpoint();

  const level1Size = xxl ? '40px' : lg ? '38px' : '30px';
  const level2Size = xxl ? '32px' : lg ? '30px' : '24px';
  const level3Size = xxl ? '26px' : lg ? '24px' : '20px';
  const level4Size = xxl ? '22px' : lg ? '20px' : '18px';
  const level5Size = xxl ? '18px' : lg ? '16px' : '14px';

  function levelFontSize() {
    switch (level) {
      case 1:
        return level1Size;
      case 2:
        return level2Size;
      case 3:
        return level3Size;
      case 4:
        return level4Size;
      case 5:
        return level5Size;
      default:
        return level1Size;
    }
  }

  return (
    <Typography.Title level={1} style={{ fontSize: levelFontSize() }}>
      {children}
    </Typography.Title>
  );
}

export default Title;
