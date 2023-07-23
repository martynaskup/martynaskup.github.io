import styled from 'styled-components';
import { Card, Carousel } from 'antd';

export const StyledCarousel = styled(Carousel)`
  .slick-dots li button {
    background: #001529;
    padding-top: 8px;
    border-radius: 4px;
  }

  .slick-dots li.slick-active button {
    background: #001529;
  }
`;

export const StyledCard = styled(Card)`
  padding: 8px;
  margin: 50px auto 24px;
  border: 1px ridge rgba(0, 21, 41, 0.3);
  border-radius: 2px;
  box-shadow: 4px 4px 8px rgba(0, 21, 41, 0.2);
  text-align: left;
  .ant-card-body {
    padding: 16px;
  }
  .ant-card-head-title {
    font-size: 24px;
    text-align: center;
  }

  img {
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px #001529 dotted;
  }

  .ant-card-meta {
    margin-bottom: 16px;
  }
`;
