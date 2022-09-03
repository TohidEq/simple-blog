import * as React from 'react';
import moment from 'moment';
import AddBlog from './AddBlog';
import useBlogs from './useBlogs';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
export interface ICreateProps {
}


interface IBlog {
    id : number ;
    title  : string ;
    body : string ;
    preview : string;
    author : string;
    date : string;
}


export default function Create (props: ICreateProps) {

  const [title,setTitle] = React.useState<string>("");
  const [body,setBody] = React.useState<string>("");
  const [preview,setPreview] = React.useState<string>("");
  const [author,setAuthor] = React.useState<string>("");
  const [date,setDate] = React.useState<string>(moment().format("ll"));
  
  const [valid,setValid]= React.useState(false);
  let idNumber = new Date().getTime(); 
  const {data:blogs} = useBlogs();
  const navigate = useNavigate();
  const testFunction = (e:any)=>{
    e.preventDefault(); // stop refresh page //

    // make id //
    idNumber=new Date().getTime();

    const newBlog:IBlog={
      id: idNumber,
      title: title,
      body: body,
      preview: preview,
      author: author,
      date: date
    }
    if(valid){
      
      AddBlog({newBlog,blogs})
      navigate("/");
    }else{
      alert("pls fill all")
    }
    
  }


  React.useEffect(()=>{
    if(title!=="" && body!=="" && preview!=="" && author!==""){
      setValid(true)
    }else{
      setValid(false)
    }
  },[title,body,preview,author])




  return (
    <div className="create">
      <h1>Create New blog</h1>
        <form onSubmit={testFunction}>

          <div className="title-box">
            <label >Title</label>
            <input className='input'
                type="text"
                required
                onChange={(e)=>{setTitle(e.target.value)}}
            />
          </div>
          
          <div className="body-box">
            <label >Preview text</label>
            <textarea className='input preview-input'
                required
                onChange={(e)=>{setPreview(e.target.value)}}
            ></textarea>  
          </div>
          

          <div className="body-box">
            <label >Body</label>
            <textarea className='input'
                required
                onChange={(e)=>{setBody(e.target.value)}}
            ></textarea>  
          </div>

          <div className="author-box">
            <label >Author</label>
            <input className='input'
                type="text"
                required
                onChange={(e)=>{setAuthor(e.target.value)}}
            />
          </div>
          


          <button onClick={testFunction}>Add Blog</button>



        </form>
    </div>  
  );
}
