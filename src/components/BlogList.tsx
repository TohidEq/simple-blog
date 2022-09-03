import * as React from 'react';
import { Link } from 'react-router-dom';
import useBlogs from './useBlogs';

export interface IBlogListProps {
   
}

const BlogList: React.FC<IBlogListProps> = () => {
  
  const {data:blogs} = useBlogs();
  const myElements = blogs.map((blog) => {
    const { id,title,preview,author,date } = blog;

    return (
        <>
            <Link to={`/blogs/${id}`} className="home-card group">
                <div className="card-title">{title}</div>
                <div className="card-texts">
                    <div className="card-text">
                    {preview}
                    </div>
                    <div className="card-info">
                    <div className="card-author">
                        By <a href="#0"> {author} </a>
                    </div>
                    <div className="card-date">{date}</div>
                    </div>
                </div>
            </Link>
        </>
        
      
    );
  });

  return(
  <>
    {myElements}
  </>
  );
};
export default BlogList;