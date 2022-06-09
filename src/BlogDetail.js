import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetail = () => {
    const {id} = useParams();
    const {data:myblog,isload,myErr} = useFetch('http://localhost:900/books/' + id);
    return ( 
        <div className="container">
            <div className="blog-detail py-5">
                {isload && <h1>Loading...</h1>}
                {myErr && <h1>{Error}</h1>}
                { myblog && (
                <article className="blog-detail-card">
                    <h2>{myblog.title}</h2>
                  <h4>
                    Written By: <strong>{myblog.author}</strong>
                  </h4>
                  <p>{myblog.body}</p>
                </article>
                )}
            </div>
        </div>
        
     );
}
 
export default BlogDetail;