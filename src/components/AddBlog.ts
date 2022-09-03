/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import useBlogs from './useBlogs';
import { type } from 'os';

type Props = {
    newBlog:IBlog
    blogs:IBlog[]
}

interface IBlog {
    id : number ;
    title  : string ;
    body : string ;
    preview : string;
    author : string;
    date : string;
}

export default function AddBlog(props:Props){

    let {newBlog, blogs} = props;
    blogs.push(newBlog);
    localStorage.setItem("myblogs",JSON.stringify(blogs))
    //return  true ;
}