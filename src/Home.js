import { useState, useEffect } from "react";
import Blogs from "./Blogs";
// import BlogList from "./BlogList";

const Home = () => {
  let [count, setCount] = useState(0);
  const inCount = () => {
    setCount(count + 1);
  };
  const deCount = () => {
    setCount(count - 1);
  };

  // const title = 'Hi Umsman i am here';

  // Blogs

  const [blogs, setBlogs] = useState(null);

  const [isMessage, setIsMeessage] = useState(true);

  const [error, setError] = useState(null);

  const myTitle = "Latest Blogs";
  const myFunc = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };

  // const [name,setName] = useState('Saqlain');

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:900/books")
        .then((res) => {
          if (!res.ok) {
            throw Error("Error could not fetch data from that Resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsMeessage(false);
          setError(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsMeessage(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="container">
      <div className="home">
        <h1>Homepage</h1>
        <div className="d-flex cart-block">
          <button className="primary-btn" onClick={deCount}>
            Decrease
          </button>
          <input type="text" readOnly value={count} />
          <button className="primary-btn" onClick={inCount}>
            Increase
          </button>
        </div>
      </div>
      {error && <h1>{error}</h1>}
      {isMessage && <h1>Loading...</h1>}
      {blogs && <Blogs title={myTitle} Blogs={blogs} deleteBlog={myFunc} />}
      {/* filter Data Saqlain's Blogs Showing on;y */}
      {blogs && (
        <Blogs
          title="Vikram Seth's Blog"
          deleteBlog={myFunc}
          Blogs={blogs.filter((blog) => blog.author === "Vikram Seth")}
        />
      )}
      
    </div>
  );
};

export default Home;
