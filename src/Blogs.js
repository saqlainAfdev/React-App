// import { useState } from "react";

const Blogs = (props) => {
  const title = props.title;
  const blogs = props.Blogs;
  const myFunc = props.deleteBlog;
  return (
    <>
    <div className="container">
      <h1 className="mb-3">{title}</h1>
      <div className="blogs">
        {blogs.map((blog) => (
          <div className="blogs-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <h4>
              Written By: <strong>{blog.author}</strong>
            </h4>
            <p>{blog.body}</p>
            <button onClick={() => myFunc(blog.id)} className="primary-btn">
              Delete Blog
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blogs;
