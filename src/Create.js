import { useState } from "react";
const Create = () => {
    const [title,setTitle] = useState('Blog title');
    const [body,setBody] = useState('Write here');
    const [author,setAuth] = useState();
    const [isPending, setIsPending] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blogData = {title,body,author};
        setIsPending(true);
        fetch('http://localhost:900/books',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blogData)            
        }
        
        )
        .then( () =>{
            
            setIsPending(false);
            alert('Are you sure to add this blog!');
        }            
        );
    }
    return ( 
        <>        
        <div className="container">
            <h1 className="py-5 text-center primary-color">Add New Blog</h1>
            <div className="add-blog-form">
            <form onSubmit={handleSubmit}>
                <div className="ctm-input">
                    <label>Blog Title<span>*</span></label>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Blog Title" required />
                </div>
                <div className="ctm-input">
                    <label>Blog Body<span>*</span></label>
                    <textarea value={body} onChange={(e)=>setBody(e.target.value)} required placeholder="Text here"></textarea>
                </div>
                <div className="ctm-input">
                <select required value={author} onChange={(e)=>setAuth(e.target.value)} >
                    <option value="Fyodor Dostoyevsky">Fyodor Dostoyevsky</option>
                    <option value="Leo Tolstoy">Leo Tolstoy</option>
                    <option value="Joseph Conrad">Joseph Conrad</option>
                    <option value="Ernest Hemingway">Ernest Hemingway</option>
                    <option value="Mohsin Hamid">Mohsin Hamid</option>
                    <option value="Akhil Sharma">Akhil Sharma</option>
                    <option value="Vikram Seth">Vikram Seth</option>                                        
                </select>
                </div>
                {!isPending && <button className="primary-btn">Add Blog</button>}
                {isPending && <button disabled className="primary-btn">Blog Adding...</button>}
            </form>
            </div>            
        </div>
        </>
     );
}
 
export default Create;