import React from 'react';
import SearchFor from './SearchFor';
import AnimalList from './AnimalList';

const Main = () => {
  return (
    <div className="main-container">
      <div className="intro-wrapper">
        <div className="intro-banner-wrapper">
          <p className="intro-banner">Assistance For Adopting A Pet Online</p>
        </div>
        <SearchFor />
      </div>
      <AnimalList />
    </div>
  );
};

export default Main;
