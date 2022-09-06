import * as React from 'react';
import {   Link, useParams } from 'react-router-dom';
import Blogs from './useBlogs';
export interface IBlogDetailProps {
    
}


export default function BlogDetail () {
    let blogId  = parseInt(useParams().id||"8");
    const {data:blogs} = Blogs();
    const myElement = blogs.map((blog) => {
        const { id,title,body,preview,author,date } = blog;
        if(id===blogId)
        return (
            <>
                <div className="blog-detail">
                    <div className="blog-title">
                        <h1 >{title}</h1>
                    </div>
                    <div className="blog-text">
                        <p>
                            {body}
                        </p>
                    </div>
                    
                    <div className="blog-info">
                        <div className="items">
                            <div className="blog-author">
                                By <a href="#0"> {author} </a>
                            </div>
                            <div className="blog-date">{date}</div>
                        </div>
                    </div>

                    <div className="blog-delete group ">
                        <label htmlFor="">I want to delete(click me)</label>
                        <button className='translate-x-[800px] group-hover:translate-x-0 group-hover:opacity-100'>DELETE</button>
                    </div>
                </div>
            </>
            
        
        );
    });
    return (
        <>
            {myElement}
        </>
    );
}
