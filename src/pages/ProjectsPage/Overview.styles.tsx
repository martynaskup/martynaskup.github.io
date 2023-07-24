import styled from 'styled-components';
import { Carousel } from 'antd';

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
