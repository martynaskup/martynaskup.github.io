import { Link } from 'react-router-dom';
import paths from '../../routes/paths';
import React from 'react';
import { StyledSpace } from './Home.styles';
import Text from '../../components/shared/Text';

function HomeSteps() {
  return (
    <StyledSpace direction="vertical" size="middle">
      <Text
        children={
          <>
            I encourage you to take a look at a few pieces of information{' '}
            <Link to={paths.about}>about me</Link> first. You will find out who
            I am, why I code, and what I do when it's not coding time.
          </>
        }
      />
      <hr />
      <Text
        children={
          <>
            Afterward, feel free to check out some of{' '}
            <Link to={paths.projectsPaths.overview}>my projects</Link> built
            with different tech stacks. It will give you an overview of some of
            my skills.
          </>
        }
      />
      <hr />
      <Text
        children={
          <>
            I have also provided a few options for you to{' '}
            <Link to={paths.contactMe}>contact me</Link>. Feel free to use them
            to let me know if you would like to cooperate with me, have a
            question, or simply want to share something nice.
          </>
        }
      />
    </StyledSpace>
  );
}

export default HomeSteps;
