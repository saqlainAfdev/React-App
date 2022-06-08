import { useState,useEffect } from "react";
import Blogs from './Blogs';
import NewBlogs from "./Newblogs";


const Home = () => {
    const [count,setCount] = useState(0);    
    const inCount = () => {        
        setCount(count+1);        
    }
    const deCount = () => {        
      setCount(count-1);        
    }
  const [isPending, setIsPending] = useState(true);
  const [isError,setIsError] = useState(null);

    // Blogs

    const [blogs,setBlogs] = useState(false);

      const myTitle = 'Latest Blogs';
      // Delete blog method
      const myFunc = (id)=>{
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog); 
        // console.log(newBlog);
      } 
      
      useEffect(() =>{
        setTimeout(() => {
          fetch('http://localhost:900/books')
        .then( res =>{
          if(!res.ok){
            throw Error("Error Could not fetch data from that resource");
          }          
         return res.json(); 
        })
        .then(data =>{
          setBlogs(data);
          setIsPending(false);
          setIsError(null);
        })
        .catch(error =>{
          setIsError(error.message);
          setIsPending(false);
        })
        }, 1000);
      }, []);
    
      
    
    return ( 
        
        <div className="container">
            <div className="home">
                <h1>Homepage</h1>
                <div className="d-flex cart-block">
                <button className="primary-btn" onClick={deCount}>Decrease</button>            
                  <input type="text" readOnly value={count} />
                  <button className="primary-btn" onClick={inCount}>Increase</button>            
                </div>                
                
            </div>
            {isPending && <h1>Loading...</h1>}
            {isError && <h1>{isError}</h1>}
            {blogs && <Blogs title={myTitle} Blogs={blogs} deleteBlog={myFunc} />}            
            {/* {blogs && <Blogs title="Vikram Seth's Blog" deleteBlog={myFunc} Blogs={blogs.filter((blog)=>blog.author === "Vikram Seth")} />}*/}          
          <NewBlogs />      
        </div>        
     );
}
 
export default Home;