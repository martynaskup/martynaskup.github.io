import { StyledDetailsSpace } from './About.styles';
import { SmileOutlined } from '@ant-design/icons';
import Card from '../../components/shared/Card';
import Text from '../../components/shared/Text';

function AboutDetailsCard() {
  return (
    <Card>
      <StyledDetailsSpace direction="vertical" size="middle">
        <Text
          children={
            <>
              I've always been passionate about learning and improving my
              skills. Challenges are a big part of my life - both personal and
              professional. As the world of coding is full of exciting
              challenges and evolves all the time, I decided to dive into it as
              a front-end developer.
            </>
          }
        />
        <Text
          children={
            <>
              I started working as self-taught Front-end developer in 2020, with
              knowledge of HTML, CSS3, JavaScript and React. Within over 3
              years, I learned a lot and expanded my skill set. I became a fan
              of Typescript. I dived also into UX/UI design and provided
              high-quality sketches using Figma. Clean code and keeping code
              conventions is on my priority list.
            </>
          }
        />
        <Text
          children={
            <>
              I believe that delivery of a good quality product can be achieved
              when the idea of the product is understood and when there is a
              cooperation and good communication between front-end and back-end
              developers, POs and other team members. Therefore I strive to
              understand not only the requirements but also the product itself
              and the idea behind it. I like to work on projects that are
              interesting for me. Working with people with whom I can build a
              great team is a big asset.
            </>
          }
        />
        <Text
          children={
            <>
              My life in Poland, Czech Republic and Austria gave me
              opportunities to learn Czech, improve my English and practice
              German, and to gain a lot of wonderful experience in working and
              living in multinational environments. This helps me to communicate
              effectively with other people and to be seen by others as a great
              team member with a smile as a trademark. <SmileOutlined />
            </>
          }
        />
        <Text
          children={
            <>
              I'm a big fan of spending time actively. That means that mostly,
              when I'm not coding, I can be found dancing Swing. I dance Lindy
              Hop, Solo Jazz and West Coast Swing.
              <br />
              I like running. I co-organize running events and I run usually
              distances of 5&#8288;&#8211;&#8288;15 km, but sometimes 21 km is
              not enough. Maybe one day, I'll start running marathons...
              <br />
              And when the time to relax comes, I spend it with my friends or at
              home playing with my lovely cat Lala.
            </>
          }
        />
      </StyledDetailsSpace>
    </Card>
  );
}

export default AboutDetailsCard;
