import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IWelcomeProps {
}

export default function Welcome (props: IWelcomeProps) {
  return (
    <div className='welcome'>
      <h1>Welcome</h1>
      <div className="">
        <svg className="welcome-img" xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1563 788" >
          <path d="M754.5 37.6c-33.6 3.7-50 14.2-62 39.9-5.9 12.6-9.9 25.8-14.5 48.5-6.3 31.2-6.9 40.7-2.9 43.3 2.9 1.8 6.5-.2 16.5-9.4 5.4-5 12.8-11.5 16.4-14.4 24.9-20.3 60.6-36.7 101.5-46.5 34-8.2 51.4-5.6 60.5 9.2 3 4.9 7.5 15.6 6.8 16.3-.1.2-5.7-.1-12.3-.6-20.2-1.6-44.1-1.4-51.8.5-12.7 3-17.1 6.5-24.7 19.4-5.8 9.8-7.9 10.7-21.4 9.1-11.1-1.4-13.4-.9-18.5 3.6-3.7 3.4-6.4 8.1-15.2 27l-4.2 9-1.3-6c-1.7-8.2-4.8-16.2-8.4-21.9-7.1-11.1-19.5-10.6-28.7 1.1-4.3 5.4-6 9-7.4 16-1.1 5.3-1 7 .4 12.3 2.1 7.5 5.1 12.3 10.7 17.4 8 7.2 16.6 8.7 23.6 4 2.1-1.4 4.5-3.3 5.2-4.2 1-1.3 1.2-.3 1.2 5.9 0 29.1 6.4 50.4 22.2 74 10.9 16.3 28.1 32.4 40.2 37.4 2 .8 3.6 1.8 3.6 2 0 .3-2.4 5.2-5.2 10.8a547.45 547.45 0 0 0-8.7 17.7c-13.8 30.2-18.2 37.1-22.1 35-4.2-2.3-7.8-9.8-20.7-43-19.1-49.5-28.1-66.1-44.7-82.5-7.5-7.5-10.8-9.9-18.6-13.8-14.1-7-19.6-8.2-38.5-8.1-13.3 0-17.6.4-25.5 2.3-44.2 10.9-83.3 38.2-99.9 70.1-12.1 23.1-14.1 41.3-11.5 102.8 1.4 33.4 1.5 45.1.6 63.5-1.1 22.4-6.3 95.8-6.9 96.6-.1.2-11.6-7.3-25.5-16.6-31.8-21.4-41.9-27.7-58.8-36.9-59.5-32.2-115.8-44.2-190.5-40.5-45.2 2.3-90.8 8-170.5 21.6L16.3 514c-.9 0-.1 3.9.8 4.2.5.2 16.4-2.2 35.2-5.4 59.1-9.9 99.9-15.5 139.7-19 19.3-1.7 73.1-1.7 88 .1 53.2 6 97.7 22.5 149.7 55.4 15.8 9.9 54.2 35.6 57.4 38.4 1.2 1 1.7 3.4 1.8 9.1.2 9 2 19.4 3.2 18.6.5-.3.6.1.4.9-.9 2.3 2.2 8.2 6.4 12 2.7 2.4 6.4 4.4 11.3 5.9 7 2.2 8.6 2.3 38.8 2.2 17.3 0 42.8-.5 56.5-1.1 26-1.1 51.1-.5 76.2 1.8 11.4 1 14.4 1 15.7 0 3.5-2.9-1-5.3-16.4-8.5-13.2-2.8-26.9-4.5-49-6.1-51.7-3.6-62.6-4.9-79.3-9.1-17.2-4.3-35.4-12.3-50.8-22.2l-8.6-5.5.4-7.1c.2-3.9 1.5-21.3 2.8-38.6 3.8-49.1 4.7-74.2 3.5-101-2.7-63.6-2.4-77.3 2.1-96.1 2.4-9.9 9-24.4 15.2-33.1 23.6-32.9 74.1-58.8 114.9-58.8 21.5 0 37 5.8 51.5 19.3 14.1 13.2 26.1 33.8 39.7 68.7 20.4 52.1 22.5 56.3 28.8 59.6 2.4 1.2 3.2 1.2 6.1 0 4.6-1.9 8.3-7.5 15.2-23.1 1.5-3.3 7-14.7 12.2-25.3l9.5-19.2h4.7c5.9 0 14.6-2.2 21.9-5.7 6.3-2.9 19.7-12.6 21.5-15.5.7-1 1.7-1.8 2.4-1.8s2.8-1.4 4.7-3.1c4.6-4 6.9-3.5 7.8 1.6.9 4.7.2 46.2-1.2 72-2.8 55.4-3.2 66.8-2.7 86.9.7 30.5 3.7 46.4 11.3 60.5 1.9 3.5 3.4 6.5 3.2 6.6s-5.6 1-12.1 2c-7.8 1.2-15 1.6-21.6 1.3-8.8-.4-10.8-.9-17.5-4.1-6.2-2.9-9.5-5.5-17.6-13.6-18.1-18.1-17.8-18-44-12.7-37.3 7.5-63.4 10.1-92 9.3-21.5-.6-28.3-1.8-38.9-6.9-16.8-8-23.3-20.7-31.1-60.3-2.2-11.6-4.5-22-5-23.3-1-2.2-4.4-3-5.5-1.2-.3.5-1.3 14.4-2 30.7-1.7 34.8-2.7 44.4-6 61-3.4 16.6-3.3 21.9.4 27 6.2 8.6 29.2 16.9 57.2 20.7 25.9 3.6 40.6 3.1 87.4-2.9 43.1-5.5 60.2-5.6 86.9-.4 25.2 4.8 53.9 16 68.1 26.7l5 3.7-9 .5c-9.3.5-11.5 1.2-11.5 3.4 0 1.5 6.6 7.8 10.1 9.6 3.2 1.8 18.9 12.9 22.7 16.2 1.8 1.5 2.7 2.8 2 2.8-1.5 0-12.6-3-30.8-8.4-14.2-4.2-19.3-4.4-19.8-.8-.2 1.3.2 3 1 3.9 1.3 1.6 14.1 11.4 19.1 14.6 6.7 4.3.7 2.1-19.8-7.3-25-11.5-29.8-13.1-32.3-10.7-2.3 2.4-.8 4.8 10 16.3 11.8 12.5 14.6 16.3 12.7 17.4-3.8 2.4-15.9-2.7-32-13.5-7.6-5.1-15.3-9.8-17.1-10.4-8.4-2.7-17.2-1.7-27.8 3.1-14.2 6.3-11.2 11.9 11.9 21.8 13.1 5.7 86.8 32.8 115.6 42.6 64.2 21.9 110.9 26.9 175.5 18.8 6.9-.9 33.9-5.1 60-9.5 74.8-12.5 108.5-15.7 152.8-14.6 59.7 1.6 121.2 13 231.7 43.1 17.4 4.8 20.2 5.3 21.5 4 .9-.9 1.1-1.7.5-2.3-.6-.5-12.7-4.1-27-8-88.1-23.7-139.4-34.4-191-39.8-20.3-2.1-73.1-2.4-91.9-.5l-17 1.8c-18.3 1.8-49.7 6.4-85.1 12.4-65.7 11-80.8 12.5-116.5 11.7-26.2-.6-32.2-1.2-52.5-5.2-30.7-6.1-50.3-12.4-127-40.7-40.4-14.9-54.7-20.7-60.7-24.5-6-3.7-5.1-4.9 6.7-8.8 13-4.4 18-2.9 37.1 10.6 11.5 8.2 20.2 12.1 28.5 12.7 6.3.4 6.8.3 8.4-2.2 1.6-2.4 1.6-2.8-.5-7-1.2-2.5-6.2-8.8-11.1-14-4.9-5.1-8.9-9.7-8.9-10 0-.8 1.7-.1 25 10.4 27.6 12.5 33.5 14.7 35.5 13 .8-.7 1.5-1.9 1.5-2.7 0-.7-6.8-6.4-15-12.5-8.3-6.1-14.9-11.3-14.7-11.5s6.6 1.5 14.3 3.8c22.5 6.6 28.4 8 32.3 7.7 3-.3 3.6-.7 3.9-2.9.4-3.4-6.6-9.8-22.7-20.6l-11.6-7.8 7.1-.5c14.4-1 14-6.5-1.3-16.3-16.9-11-43.9-20.8-69.1-25.2-25.9-4.5-44.1-4-91.1 2.2-47.5 6.2-77.7 5-109.1-4.3-9.4-2.8-19.3-7.5-22.7-10.6-4.4-4.1-4.6-7.1-1.4-23.9 3.4-17.1 4.7-29.1 5.6-48.4l1.1-21.5.6-8.5 3.3 16c7.1 35.3 14.7 48.6 32.9 57.5 10.8 5.3 19.9 7 39.7 7.7 26.3.9 55.5-2 91.8-9.2 19.5-3.9 24.5-4.2 28.2-1.7 1.4.9 7.3 6.5 13.1 12.3 11.7 11.8 20.1 17 31.3 19 7.3 1.4 21.3.7 35.4-1.7 7.7-1.3 10.6-1.5 10.9-.6.8 2.4 13.3 11.4 21.3 15.2 10.5 5 17.5 6.8 31.4 8.2 15.1 1.6 27-.4 40.2-6.7l9.3-4.4v3.8c0 4.6-3.4 25.3-6.1 37.1-3.2 13.7-9.3 33.2-16.4 52-13.8 36.5-16.7 47.6-13.4 51.6 4 4.8 9.6 4.1 45.9-5.8 66.8-18.2 84.8-21.7 133-25.8 45.7-3.9 48.5-5.9 59.7-42 8.3-26.9 20.5-63.3 35-105 25.5-73 27-78 25.2-85.9-1.8-8.3-11.8-11.9-29.1-10.6-19.2 1.4-31 3-101.3 13.9-45.5 7.1-51.5 7.8-77 8.5-20.7.5-24.4.9-26.7 2.4-3.6 2.4-6.8 10.7-12.3 31.5-7.1 26.9-13.2 41-20.6 47.7-5.4 4.9-9.4 4.9-25.2.4-16.5-4.7-27.2-4-58.2 3.7-16.1 4.1-14.5 4.6-20-7.1-7.1-15.5-9.5-31.3-9.5-64.5 0-12.9.5-31.4 1-41 3.4-63 4.1-104.2 2.1-111.8-1.6-5.7-4.7-7.2-9.8-4.8s-18.4 13.6-17.6 14.9c.3.6.1.7-.5.3s-3.3.9-5.9 2.8c-6.5 4.6-16.6 8.7-23.5 9.5-3.2.4-5.8.4-5.8 0 0-1.7 12.1-16.8 17.1-21.3 6.5-5.9 18.1-13.6 30.4-20.2 16.4-8.7 28.9-18.3 32.2-24.9.9-1.6 1.9-3.2 2.3-3.5 1.2-.8 5.6-10.1 7.8-16.5 7.9-23.1 7.3-60.7-1.4-96.4l-3-11.6c-.4-.8 1.4-1.4 5.6-1.8 14.7-1.6 16.4-7.4 8.5-28.7-1.3-3.6-4-12.1-6-18.9-4.7-16.1-8.1-22.7-14.7-28.5-12.9-11.3-35.5-15.3-90.3-16-15.9-.2-30.8-.2-33 0zm79.5 6.9c14.4 1.6 27.1 4.6 33.3 7.7 5.9 3 12.4 9.5 15.1 15.2 1.3 2.8 4 10.7 5.9 17.6 2 6.9 4.4 14.6 5.5 17 2.9 7 5.4 16.9 4.7 18.9-.7 2.4-5.5 4.1-11.5 4.1-4.4 0-4.8-.2-5.5-2.8-1.5-6-8.4-19-12-22.6-6.5-6.5-13.2-9-25.8-9.4-5.9-.2-14.5.1-19 .8-11.2 1.6-32.4 7.1-46.5 12.1-38.9 13.7-59.3 25.6-87.3 51.1-6.6 5.9-12.5 10.8-13.1 10.8-3.7 0 7.6-57.4 15.1-76.6 11.9-30.5 24.8-40.4 59.6-45.8 6.8-1 68.5.4 81.5 1.9zm33.8 84.5c5.7.4 10.5 1 10.8 1.3 1.1 1 4.6 15.1 6.9 27.2 7.2 39.1 5.2 68.6-6.3 92.2-1.6 3.4-2.7 6.5-2.3 6.8.3.4.2.6-.4.4-.5-.1-4.1 2.9-8 6.7-5.7 5.6-10.5 8.9-25 17.1-9.9 5.6-21 12.4-24.7 15.2-7 5.3-15.2 14.4-21.8 24.1-3.8 5.7-4.2 5.9-6.8 4.9-11-4.2-27.1-18.4-37.7-33.2-8.9-12.3-17-29-20.1-41.2-2.1-8.3-2.7-13.2-3.1-28.3l-.6-18.3 5.1-10.7 9.6-20.3c2.5-5.3 6-11.1 7.7-12.8l3.2-3.2 12.7.7c16.6.9 18.3.1 24.6-10.5 5.4-9.2 6-10 10.4-13.3 4.3-3.2 9.1-4.7 17.8-5.8 7-.9 30.4-.4 48 1zM711 163.2c5.9 4.1 11.5 18 12.6 31.8.6 6.1.4 6.8-2.5 10.7-7.1 9.7-16.5 10-25.5.7-5.7-5.9-8.1-11.8-8.1-19.9 0-5.8.5-7.9 2.9-12.2 3.2-5.8 6.6-9.4 11.1-11.7 4-2.1 5.6-2 9.5.6zm516.4 262.1c2.1.7 4.8 2.4 5.9 3.9 3.7 4.9 2.8 8-25.1 87.8l-32.6 97.9c-7 22.4-8.8 26.8-13.2 32-5.7 6.8-14.6 9-46.4 11.6-45.6 3.7-62.6 7.1-140 28-33 8.9-34.6 8.7-31.6-3.2 1-3.8 5.4-16.5 9.8-28.3 10.7-28.4 13.2-36 17.3-51.5 6.9-25.9 10.6-49.6 8.6-54.8-1.5-3.8-5.5-3.6-13.9.7-11.4 5.8-17 7.1-32.2 7-15.7-.1-26-2.2-37.5-7.9-6.4-3.2-19.1-12.2-18.3-13 .6-.6 19.5-5.4 29.8-7.5 15.2-3.2 25.8-2.9 39 .9 5.8 1.7 12.7 3.1 15.3 3.1 15 0 24.2-14.7 35.3-56.3 5.4-20.4 8.3-27.4 11.6-28.1 1.3-.3 12.2-.7 24.3-1 23.6-.5 31.6-1.4 80-9.1 81.5-12.9 103.7-15.3 113.9-12.2zM497.8 593.8c6 4.1 14.4 8.2 15.4 7.6.7-.4.8-.3.4.4-1 1.7 13.7 8.7 27.4 13.2 18.5 6.1 36.3 8.6 79 11.5 40 2.7 40.4 2.9 5.5 3.6l-66 1.4c-37 .9-44 .3-53-4-6-2.9-9.9-8.3-11.6-16.2-.7-3-1.5-5.6-1.8-5.7-1-.7 0-13.6 1.1-13.6.5 0 2.2.8 3.6 1.8z"/>
        </svg>
        <div className="welcome-text-box">
          <div className="welcome-text-msg">
            Start writing <br />
            your first blog post <br /> 
            right now. GLHF ^_^
            
            <Link to="/create">Create Post</Link>
            
          </div>
          
        </div>
      </div>
    </div>

  );
}
