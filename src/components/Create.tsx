import * as React from 'react';

export interface ICreateProps {
}




export default function Create (props: ICreateProps) {
  return (
    <div className="create">
      <h1>Create New blog</h1>
        <form >

          <div className="title-box">
            <label > Title</label>
            <input className='input'
                type="text"
                required
            />
          </div>

          <div className="body-box">
            <label >Preview text</label>
            <textarea className='input preview-input'
                required
                
            ></textarea>  
          </div>
          

          <div className="body-box">
            <label >Body</label>
            <textarea className='input'
                required
                
            ></textarea>  
          </div>
          


          <button >Add Blog</button>



        </form>
    </div>  
  );
}
