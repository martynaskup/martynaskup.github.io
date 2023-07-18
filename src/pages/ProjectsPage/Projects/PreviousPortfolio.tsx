import { Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

const PreviousPortfolio = () => {
  const { lg } = useBreakpoint();
  return (
    <>
      <Typography.Title level={2}>
        Information and link to my previous portfolio
      </Typography.Title>
      <Space
        direction="vertical"
        size="large"
        style={{ width: lg ? '750px' : 'inherit', textAlign: 'left' }}
      >
        <Typography.Text>
          I build this portfolio in 2019. I spend that year learning web in
          order to change my profession from German & Polish teacher and
          translator to a front-end developer.
        </Typography.Text>
        <Typography.Text>
          I finished my IT-Bachelor studies in 2010 and I had still in my mind
          that developing websites was one of the most interesting subjects for
          me that time. I had this IT background and remembered a lot from what
          I learned, but I knew that web development has been changing rapidly
          in the last few years so I needed to put a lot of effort to get my
          knowledge up to date.
        </Typography.Text>
        <Typography.Text>
          This portfolio and projects included in it show the result of my
          learning from online courses and online documentations as well as my
          own practice sessions.
        </Typography.Text>
        <Typography.Text>
          After the learning period, I started working as Front-end developer
          and since then I was improving my knowledge and expanded my skill set.
          However, I think this portfolio can give you an overview of what I was
          able to develop after a few months of self-learning.
        </Typography.Text>
        <Typography.Text>
          Some of the projects were updated. Mostly in order to make the code
          cleaner or to use modern solutions, e.g. React Hooks instead of life
          cycle methods. However, the changes are minor and the most of the code
          is still reflect my skills from the mentioned learning period of my
          life.
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
    </>
  );
};

export default PreviousPortfolio;
