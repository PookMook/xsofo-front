import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { styled } from '@xsofo/design-system';

const HomePageStyles = styled('div', {
  fontFamily: '$system',
  color: '$hiContrast',
  label: {
    color: 'red',
  },
  main: {
    minHeight: '100vh',
    padding: '4rem 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '.grayback1': {
    backgroundColor: '$gray1',
    color: '$gray12',
  },
  '.grayback12': {
    backgroundColor: '$gray12',
    color: '$gray1',
  },
  '.scheme1': {
    backgroundColor: '$scheme1',
    color: '$scheme12',
  },
  '.container': {
    backgroundColor: '$appBackground',
    // backgroundColor: 'var(--colors-gray1)',
    // backgroundColor: '$gray1',
    // backgroundColor: theme.colors.gray1,
    color: '$loContrast',
    padding: '0 2rem',
    '@darkTheme': {
      'main::before': {
        content: 'DARK MODE IS ON',
      },
    },
  },
});

const Home: NextPage = function Home() {
  return (
    <HomePageStyles>
      <div className="container">
        <Head>
          <title>XSOFO: Demo Page</title>
          <meta name="description" content="XSOFO: Demo Page" />
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>

        <main>
          <div className="grayback1">
            This is Gray1 Background and Gray12 ForeGround
          </div>
          <div className="grayback12">
            This is Gray12 Background and Gray1 ForeGround
          </div>
          <div className="scheme1">
            This is Scheme1 Background and Scheme12 ForeGround
          </div>
        </main>
      </div>
    </HomePageStyles>
  );
};

export default Home;
