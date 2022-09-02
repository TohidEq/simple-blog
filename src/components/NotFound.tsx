import * as React from 'react';
import { Link } from 'react-router-dom';

interface INotFoundProps {
}

const NotFound = (props: INotFoundProps)=> {
  return(
    <div id="not-found">
        <h3>404 - Not Found</h3>
        <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default NotFound;
