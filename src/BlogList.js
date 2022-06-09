import { Link } from "react-router-dom";

const BlogList = ({ myBlogs, title }) => {
  return (   
    <div className="blogList">
      <div className="container">
        <h1 className="mb-3">{title}</h1>
        <div className="blogs">
          {myBlogs.map((myblog) => ( 
            <div className="blogs-preview" key={myblog.id}>          
              <Link to={`/blogs/${myblog.id}`}> 
              <div className="blog-card">
              <h2>{myblog.title}</h2>
                  <h4>
                    Written By: <strong>{myblog.author}</strong>
                  </h4>
                  <p>{myblog.body}</p>
                </div>                                                             
              </Link> 
              </div>                             
          ))}
        </div>
      </div>
    </div>    
  );
};

export default BlogList;
