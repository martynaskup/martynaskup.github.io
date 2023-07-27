import { Space } from 'antd';
import { Link } from 'react-router-dom';
import ProjectInfoCard from '../../../components/shared/ProjectInfoCard';
import Text from '../../../components/shared/Text';

const PreviousPortfolioInfoCard = () => {
  return (
    <Space direction="vertical" size="large" align="center">
      <ProjectInfoCard
        title="About my Previous Portfolio"
        children={
          <Space direction="vertical" size="large">
            <Text
              children="I created this portfolio in 2019 when I dedicated a lot of time to learning
              about web development with the aim of transitioning from being a German & Polish teacher
              and translator to a front-end developer."
            />
            <Text
              children="Back in 2010, I successfully completed my IT Bachelor's studies. I
              remembered that I really enjoyed creating websites at that time.
              Although I had some IT knowledge and retained much of what I had
              learned, I was aware that web development had evolved
              significantly over the years. Consequently, I knew I had to put in
              a lot of effort to update my skills."
            />
            <Text
              children="This portfolio and the projects in it reflect what I learned from
              online classes, documents, and my own practice."
            />
            <Text
              children="Upon gaining sufficient proficiency, I started working as a
              Front-end developer. Since then, I have been continuously
              enhancing my skills and expanding my knowledge. However, this
              portfolio showcases what I accomplished after just a few months of
              self-teaching."
            />
            <Text
              children="I updated some of the projects. the changes mainly involved
              optimizing the code and incorporating newer solutions, such as
              using React Hooks instead of life cycle methods. Nonetheless, the
              core of the code still represents the skills I acquired during my
              self-teaching phase."
            />
            <Text
              children={
                <>
                  For reference, here is the link to my previous portfolio::{' '}
                  <Link
                    to="https://snikerslala.github.io/previous-portfolio/"
                    target="_blank"
                    rel="noopener"
                  >
                    https://snikerslala.github.io/previous-portfolio/
                  </Link>
                </>
              }
            />
          </Space>
        }
      />
    </Space>
  );
};

export default PreviousPortfolioInfoCard;
