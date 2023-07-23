import { Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Card from '../../../components/shared/Card';

const PreviousPortfolio = () => {
  return (
    <Space direction="vertical" size="large" align="center">
      <Typography.Title level={2}>
        Information and link to my previous portfolio
      </Typography.Title>
      <Card>
        <Space direction="vertical" size="large">
          <Typography.Text>
            I made this portfolio in 2019. That year, I spent a lot of time
            learning about web design. I wanted to change my job from a German &
            Polish teacher and translator to a front-end developer.
          </Typography.Text>
          <Typography.Text>
            In 2010, I completed my IT Bachelor's studies. I remembered that I
            really enjoyed making websites at that time. I had some IT knowledge
            and I remembered much of what I had learned. But, I knew that web
            design had changed a lot over the years. So, I knew I had to work
            hard to update my skills.
          </Typography.Text>
          <Typography.Text>
            This portfolio and the projects in it show what I learned from
            online classes, documents, and my own practice.
          </Typography.Text>
          <Typography.Text>
            After I learned enough, I started working as a Front-end developer.
            Since then, I have been improving my skills and learning more. But,
            I think this portfolio shows what I could do after only a few months
            of teaching myself.
          </Typography.Text>
          <Typography.Text>
            I updated some of the projects. I mostly did this to make the code
            cleaner or to use new solutions, like React Hooks instead of life
            cycle methods. But, the changes are small and most of the code still
            shows my skills from when I was teaching myself.
          </Typography.Text>
          <Typography.Text>
            Here is the link to my previous portfolio:{' '}
            <Link
              to="https://snikerslala.github.io/previous-portfolio/"
              target="_blank"
              rel="noopener"
            >
              https://snikerslala.github.io/previous-portfolio/
            </Link>
          </Typography.Text>
        </Space>
      </Card>
    </Space>
  );
};

export default PreviousPortfolio;
