import * as React from 'react';
import logo from '../logo.svg'




export interface INavbarProps {
}

export function Navbar (props: INavbarProps) {
  return (
    <div className='navbar'>
        <div className="container">
            
            <div className="nav-logo">
                <svg className="nav-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path d="M307 70.9c-9.1 2.9-13.8 6.7-20.1 16.3-6.7 10.2-10.5 19-15.3 35.3-1.9 6.6-4.8 15.6-6.4 19.9l-2.8 7.8-3.6-10c-6.3-17.7-21.1-37.9-31.3-42.7-7.8-3.6-14.3-2.1-26 6.1-1.6 1.2-5.3 3.3-8.1 4.7-6.1 3.1-9.2 7.5-10.3 14.6-.4 2.8-1.9 6.5-3.4 8.4-2.8 3.8-13.7 21.6-13.7 22.6 0 .3-1.7 3.3-3.7 6.6-11.2 18.3-18.4 33.4-22.2 46.9-3.7 12.9-4.6 18.4-6.6 37.8-3.3 32.9-1.6 43 10.2 61 7 10.6 12.5 16.2 20 20 12.4 6.5 16.6 7.3 37.8 7.3 17.5 0 19.5-.2 24.7-2.3 11.7-4.7 22.8-15.6 29.8-29.3 2.2-4.3 11.1-33.3 13.6-44.7 1.1-4.5 2.1-8.1 2.5-8 1.2.6 19 21.8 25.8 31 11.6 15.6 20.9 21.8 33 21.8 18.3 0 25.7-9 33.7-40.8 3.1-12.3 3.4-14.8 3.4-28.1 0-17.1-1.1-20.6-8.1-26.3-8.4-6.8-9.9-7.2-26.6-7.6-12.3-.3-15.7-.1-18.5 1.2-6.2 3-8.5 9.9-5.1 15.7 2.8 4.6 6.8 6 16 5.2 9.4-.7 16.7.2 18.8 2.3 2.8 2.8 2 16.4-1.9 31.6-1.9 7.3-4.2 15.5-5.3 18.3-1.6 4.4-2.2 5-5 5.3-5.2.5-8.8-2.3-17-13.1-4.2-5.6-12.1-15.4-17.6-21.7-9.8-11.5-14.6-19.5-16.7-28-1.7-7.4-2.5-34.6-1.1-42.5.7-3.9 3.9-14.9 7-24.5l9.4-28.8c2.3-7.2 5.2-13.7 8-18 5.2-8 6.4-9.1 11-9.9 3.2-.5 3.7-.2 5.1 2.6.9 1.7 3.7 5.4 6.3 8.3l4.6 5.2-.7 10c-.4 5.6-.7 11.2-.7 12.6.1 3.7 3.3 7.3 7.7 8.9 3.6 1.2 4.4 1.2 7.7-.4 2.1-1 4.4-3 5.2-4.5 2.3-4.4 3.8-15.6 3.3-24.4-.5-9.4-2.2-13.2-9.7-22.1-2.8-3.2-5.1-6.3-5.1-6.7 0-1.7-7.5-9-11.1-10.9-4.8-2.4-13.4-2.4-20.9 0zm-84.3 51.3c8.2 9.1 16.4 26.8 21.8 47.5 1.3 5.1 3.2 11.9 4.2 15 2.6 8.5 2.6 50.1 0 62-2.5 11.8-11.2 41.4-13.2 45.4-4 7.7-9.4 13.7-14.6 16.3-5 2.4-6.2 2.6-19.5 2.6-23.3 0-29.6-3-39.8-18.8-2.4-3.7-4.9-8.5-5.5-10.7-1.5-5.6-1.4-19.3.5-37.5 2.2-22.6 6.9-39.5 14.8-53.5l8.8-15.8c11.6-21 17.5-30.1 20-30.8 1.3-.3 3.3-1.1 4.5-1.7 2.8-1.5 5.6-7.8 4.9-10.8-.5-1.8.3-3.3 3.7-6.9 4.9-5.1 6.5-5.5 9.4-2.3zm-110.8-18.9c-6 4-15.7 25.4-22.9 50.8l-11.1 36.4-8.6 27c-.9 2.7-2.5 6.8-3.5 8.9-3.4 6.7-13 41.2-14.3 51.1-.3 2.7-1.3 8-2.1 11.7-1.2 4.9-1.5 10.8-1.2 22.5l.3 15.9 3.5 5.8c1.9 3.2 5 7 6.9 8.5l3.4 2.6 21.9.3c23.6.3 33.4-.7 44.2-4.8 7.4-2.8 11.5-6.5 12.5-11.3 2-8.7-3.2-16.7-11-16.7-3.4 0-4.7.6-7.7 3.6-2 2-4.7 4.1-6.2 4.7-1.4.6-11.8 1.2-23.7 1.5l-21.3.4v-12c0-16.8 2.9-33.1 11.1-61.7 1.1-3.9 3.1-9.6 4.5-12.8 2.6-6 15.3-45 20-61.2 7.9-27.9 14.8-46.7 19.6-53.7 3.3-4.8 4.1-8.4 2.8-12.3-2.3-7-10.7-9.5-17.1-5.2zm302.1 2.4c-.8.3-4.2 2.3-7.6 4.5-6.7 4.5-10.4 9.1-10.4 13.1 0 2.8-2.9 8.4-6.7 13.1-7.7 9.4-11.9 27.2-13.3 57.1l-2.2 34.5c-.7 9.1-1.3 25.7-1.3 37 0 20.4 0 20.5 2.8 26.5 6.6 14 22.6 22.2 33 16.8 12.6-6.5 32.8-26.6 40.6-40.4 5.5-9.8 6.1-16.7 6.1-66.6 0-48.4-.2-50.5-6.2-67.8-8.4-24.3-12.3-28.6-26-28.4-4 0-8 .3-8.8.6zm13.3 34.9l4.2 11.9v50c0 55.8.5 51.6-7.3 61.5-8.3 10.6-21.1 22-24.6 22-.9 0-2.3-1.4-3.2-3.1-1.3-2.7-1.5-6-1.1-23.3.3-11 1-26 1.6-33.1.6-7.2 1.5-21.8 2.1-32.5 1.2-25.8 3.7-37.7 9.2-45 4.2-5.5 9.2-13.6 11-17.8 1.2-2.7 2.3-4.1 2.9-3.5.5.5 2.9 6.3 5.2 12.9zm-26.3 190c-15.6 4.7-21.6 5.4-49.5 6-13.2.3-27.6.9-32 1.4-23.4 2.7-34.1 4.3-44 6.6-6 1.4-15.5 3.4-21 4.5s-12.9 2.8-16.5 3.9c-3.6 1-15 3.5-25.5 5.5l-29 5.5c-16.6 3.2-24.9 4-42.7 4-18.9 0-22.7.9-25.3 6.1-2.6 4.9-1.9 9.7 1.9 13.5l3.4 3.4h18.9c19 0 30.3-1.2 49.8-5l24-4.5c7.7-1.4 20.3-4.1 28-6 20.9-5.1 50.2-11.2 57-12 3.3-.3 10.7-1.3 16.5-2.1s24-1.9 40.5-2.4c31.7-1 36.1-1.5 53.6-7 10.3-3.2 14.3-6.1 15.4-11 .8-3.6-1.6-9.4-4.7-11.3-4.3-2.7-7.2-2.5-18.8.9zm-3.1 59.8c-1 1-21.2 4.6-34.4 6.1-42.3 4.9-82.4 7.2-143.5 8.2l-37.5.6-3.2 3.2c-4.3 4.3-4.6 9.8-.8 14.4 4.4 5.2 6.7 5.4 41.9 4.8 80.2-1.5 145.7-6.5 174.8-13.4 9.1-2.1 11.1-2.9 13.3-5.5 3-3.5 3.4-9.6.8-13.5-2.2-3.3-9.7-6.6-11.4-4.9z"/></svg>
                <h2>Navbar</h2>
            </div>

            <div className="nav-links ">
                <a href="#">Home</a>
                <a href="#">Create</a>
            </div>
        </div>
    </div>
  );
}
