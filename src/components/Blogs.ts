import React from 'react'

type Props = {}

interface IBlog {
    id : number ;
    title  : string ;
    body : string ;
    preview : string;
    author : string;
    date : string;
}

let defaultBlogs = 
[{ 
  title:"Title 1",
  preview:"this is preView text and Lorem ipsum dolor sit, amet consectetur adipisicing elit. repellendus ...",
  author:"TohidEq 1", 
  date:"10,may,2022",
  body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius, iure repellendus fugit expedita incidunt culpa, quae omnis explicabo esse dicta, odit ea sequi natus alias ducimus. Sequi, ipsa tenetur.", 
  id:0
},{ 
  title:"Title 2",
  preview:"this is preView text and Lorem ipsum dolor sit, amet consectetur adipisicing elit. repellendus ...",
  author:"TohidEq 2", 
  date:"10,may,2012",
  body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eius, iure repellendus fugit expedita incidunt culpa, quae omnis explicabo esse dicta, odit ea sequi natus alias ducimus. Sequi, ipsa tenetur.", 
  id:1
}];

export default function Blogs() {


  const [data,setData] = React.useState<IBlog[]>
  (
        JSON.parse
        (
        localStorage.getItem("myblogs")
        ||
        JSON.stringify(defaultBlogs)
        )
  );
  React.useEffect(()=>{
    localStorage.setItem("myblogs", JSON.stringify(data))
  },[data]);

  return { data };
}