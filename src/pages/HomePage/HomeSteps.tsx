import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import paths from '../../routes/paths';
import React from 'react';
import { StyledSpace } from './Home.styles';

function HomeSteps() {
  return (
    <StyledSpace direction="vertical" size="middle">
      <Typography.Text>
        I encourage you to take a look at a few pieces of information{' '}
        <Link to={paths.about}>about me</Link> first. You will find out who I
        am, why I code and what I do when it's not the coding-time.
      </Typography.Text>
      <hr />
      <Typography.Text>
        Then check out some of my{' '}
        <Link to={paths.projectsPaths.base}>projects</Link> built with different
        tech stack. It will give you an overview of some of my skills.
      </Typography.Text>
      <hr />
      <Typography.Text>
        I also left a few options for you to{' '}
        <Link to={paths.contactMe}>contact me</Link>. Feel free to use them to
        let me know you would like to cooperate with me, have a question or tell
        me something nice.
      </Typography.Text>
    </StyledSpace>
  );
}

export default HomeSteps;
