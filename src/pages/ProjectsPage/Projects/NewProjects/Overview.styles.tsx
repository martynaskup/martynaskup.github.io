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
  margin: 50px auto 0;
  border-color: #001529;
  text-align: left;
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
