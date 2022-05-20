import React from 'react';

import Layout from './Shared/Layout';

const NotFound = () => {
  const style = {
    textAlign: 'center',
    height: '500px',
  };

  return (
    <Layout>
      <div style={style}>
        <lottie-player
          src='https://assets10.lottiefiles.com/packages/lf20_aaesnvcw.json'
          background='transparent'
          speed='1'
          loop
          autoplay
        ></lottie-player>
      </div>
    </Layout>
  );
};

export default NotFound;
