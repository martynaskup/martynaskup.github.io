import { Carousel } from 'antd';

function Overview() {
  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Carousel dotPosition="top">
      <div>
        <h3 style={contentStyle}>Project 1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Project 2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Project 3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>Project 4</h3>
      </div>
    </Carousel>
  );
}

export default Overview;
