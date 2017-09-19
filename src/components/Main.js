import React from 'react';
import SearchFor from './SearchFor';
import AnimalList from './AnimalList';

const Main = () => {
  return (
    <div className="main-container">
      <div className="intro-wrapper">
        <p className="intro-banner">
          adopting a pet is something you will never regret
        </p>
      </div>
      <SearchFor />
      <AnimalList />
    </div>
  );
};

export default Main;
