import { SmileOutlined } from '@ant-design/icons';
import { Col, Image, Space, Typography } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import myImg from '../assets/images/my_pic.jpg';
import { StyledAboutRow, StyledDetailsSpace } from './About.styles';

const About = () => {
  const { md } = useBreakpoint();

  const intro = (
    <>
      <Typography.Title level={2}>
        Hello! Hallo! Cześć! and... Ahoj!
      </Typography.Title>
      <Typography.Title level={3}>
        from a Polish front-end developer!
      </Typography.Title>
      <Typography.Text>
        I would like to share with you a bit of information about me, my
        personal and professional life.
      </Typography.Text>
    </>
  );

  const myImage = (
    <Image
      width={240}
      src={myImg}
      alt="my picture"
      placeholder={
        <Image preview={false} src={myImg} alt="my picture" width={200} />
      }
    />
  );

  const details = (
    <StyledDetailsSpace direction="vertical">
      <Typography.Text>
        I've always been passionate about learning and improving my skills.
        Challenges are a big part of my life - both personal and professional.
        As the world of coding is full of exciting challenges and evolves all
        the time, I decided to dive into it as a front-end developer.
      </Typography.Text>
      <Typography.Text>
        I started working as self-taught Front-end developer in 2020, with
        knowledge of HTML, CSS3, JavaScript and React. Within over 3 years, I
        learned a lot and expanded my skill set. I became a fan of Typescript. I
        dived also into UX/UI design and provided high-quality sketches using
        Figma. Clean code and keeping code conventions is on my priority list.
      </Typography.Text>
      <Typography.Text>
        I believe that delivery of a good quality product can be achieved when
        the idea of the product is understood and when there is a cooperation
        and good communication between front-end and back-end developers, POs
        and other team members. Therefore I strive to understand not only the
        requirements but also the product itself and the idea behind it. I like
        to work on projects that are interesting for me. Working with people
        with whom I can build a great team is a big asset.
      </Typography.Text>
      <Typography.Text>
        My life in Poland, Czech Republic and Austria gave me opportunities to
        learn Czech, improve my English and practice German, and to gain a lot
        of wonderful experience in working and living in multinational
        environments. This helps me to communicate effectively with other people
        and to be seen by others as a great team member with a smile as a
        trademark. <SmileOutlined />
      </Typography.Text>
      <Typography.Text>
        I'm a big fan of spending time actively. That means that mostly, when
        I'm not coding, I can be found dancing Swing. I dance Lindy Hop, Solo
        Jazz and West Coast Swing.
        <br />
        I like running. I co-organize running events and I run usually distances
        of 5 - 15 km, but sometimes 21 km is not enough. Maybe one day, I'll
        start running marathons...
        <br />
        And when the time to relax comes, I spend it with my friends or at home
        playing with my lovely cat Lala.
      </Typography.Text>
    </StyledDetailsSpace>
  );

  const main = md ? (
    <StyledAboutRow
      justify="center"
      align="middle"
      gutter={{ sm: 16, md: 24, lg: 32 }}
    >
      <Col span={8} style={{ textAlign: 'right' }}>
        {myImage}
      </Col>
      <Col span={12}>{details}</Col>
    </StyledAboutRow>
  ) : (
    <Col span={24}>
      {myImage}
      {details}
    </Col>
  );

  return (
    <Space direction="vertical" size="middle">
      {intro}
      {main}
    </Space>
  );
};

export default About;
