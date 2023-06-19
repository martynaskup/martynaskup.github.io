import { Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Home() {
  return (
    <Space direction="vertical" size="middle">
      <Typography.Title level={2}>
        Welcome on my portfolio page!
      </Typography.Title>
      <Typography.Title>Hello! I'm Martyna, React developer</Typography.Title>
      <Space direction="vertical">
        <Typography.Text>
          I made this page so that you can get to know me a little bit.{' '}
        </Typography.Text>
        <Space
          align="start"
          wrap
          size="middle"
          style={{
            width: '100%',
            justifyContent: 'space-around',
            marginTop: '24px',
          }}
        >
          <Typography.Text style={{ display: 'block', width: '200px' }}>
            I encourage you to take a look at a few information{' '}
            <Link to="/about">about me</Link> first. You will find out who I am,
            why I code and what I do when it's not the coding-time.
          </Typography.Text>
          <Typography.Text style={{ display: 'block', width: '200px' }}>
            Then check out some of my <Link to="/projects">projects</Link> build
            with different tech stack. It will give you an overview of some of
            my skills.
          </Typography.Text>
          <Typography.Text style={{ display: 'block', width: '200px' }}>
            I left also a few options for you to{' '}
            <Link to="/contact">contact me</Link>. Feel free to use them to let
            me know you would like to cooperate with me, have a question or tell
            me something nice.
          </Typography.Text>
        </Space>
      </Space>
    </Space>
  );
}
