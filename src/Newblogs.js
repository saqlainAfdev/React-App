
import BlogList from "./BlogList";
import useFetch from "./UseFetch";



const NewBlogs = () => {
    const myTitle = 'New Blogs';
    const {data:myBlogs,isload,myErr} = useFetch('http://localhost:900/books');
    
    
    return (         
        
        <div className="container">            
            {isload && <h1>Loading...</h1>}
            {myErr && <h1>{myErr}</h1>}
            {myBlogs && <BlogList title={myTitle} myBlogs={myBlogs}  />}           
        </div>        
    );
}
 
export default NewBlogs;