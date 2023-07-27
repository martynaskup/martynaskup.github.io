import { Space } from 'antd';
import ProjectInfoCard from '../../../components/shared/ProjectInfoCard';
import Text from '../../../components/shared/Text';
import { Link } from 'react-router-dom';

function NewPortfolioInfoCard() {
  return (
    <Space direction="vertical" size="large" align="center">
      <ProjectInfoCard
        title="About this Portfolio Project"
        children={
          <Space direction="vertical" size="large">
            <Text
              children="I built my first portfolio using HTML, CSS, and JavaScript in 2019 while I was developing
              my Front-end skills before starting my first job as a Front-end developer in December 2019.
              Since then, my skills have evolved, and I wanted to showcase them more effectively.
              The portfolio I had was no longer sufficient, and I couldn't display the code I created for the companies
              I worked for, as it was not open source, and the companies do not permit sharing their proprietary code.
              Therefore, I decided to create a new portfolio to demonstrate at least a part of my skills."
            />
            <Text
              children="For this portfolio website, I utilized React 18 and Typescript along with antd components.
              Some of the antd components were customized using styled-components to match the UI design
              and ensure responsiveness on both small and large screens. The forms used in the Budget app,
              which is part of this portfolio project, were developed with Formik and Formik-antd to seamlessly
              integrate with the antd components. Form fields were validated using a Yup schema, and Moment.js
              was employed for handling date-related components. The navigation between portfolio pages was implemented
              using React-Router v6."
            />
            <Text
              children="This portfolio website not only showcases some of my skills and projects
              but also provides general information about me, including who I am and why I am passionate
              about being a React/Front-end developer."
            />
            <Text
              children={
                <>
                  For your reference, you can find the code of this portfolio
                  website on GitHub by following this link:{' '}
                  <Link
                    to="https://github.com/snikerslala/snikerslala.github.io"
                    target="_blank"
                    rel="noopener"
                  >
                    https://github.com/snikerslala/snikerslala.github.io
                  </Link>
                </>
              }
            />
          </Space>
        }
      />
    </Space>
  );
}

export default NewPortfolioInfoCard;
