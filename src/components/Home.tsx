
import * as React from 'react';
import BlogList from './BlogList';

export interface IHomeProps {

}

export default function Home () {
  return (
    <div className='home'>
      <h1>Home</h1>
      <div className="home-cards">
        <BlogList />
      </div>
    </div>
  );
}
