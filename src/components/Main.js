import React from 'react';
import SearchFor from './SearchFor';
import AnimalList from './AnimalList';

const Main = () => {
  return (
    <div className="main-container">
      <div className="intro-wrapper">
        <p className="intro-banner">Assistance For Adopting A Pet Online</p>
        <div id="down-arrow-icon">&darr;</div>
      </div>
      <main className="bottom-main-page-wrapper">
        <SearchFor />
        <AnimalList />
      </main>
    </div>
  );
};

export default Main;
