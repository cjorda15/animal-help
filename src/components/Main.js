import React from 'react';
import SearchFor from './SearchFor';

const Main = () => {
  return (
    <div className="main-container">
      <div className="intro-wrapper">
        <p className="intro-banner">
          adopting a pet is something you will never regret
        </p>
      </div>
      <SearchFor />
    </div>
  );
};

export default Main;

// style={{ backgroundImage: 'url("/img/mainPageImg.jpg")' }}
