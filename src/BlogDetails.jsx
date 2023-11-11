import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import styles from "./BlogDetails.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const { id } = useParams();
  const history=useHistory();
  const handleDelete = () => {
    fetch("http://localhost:3000/blogs/" + id, {
      method: "DELETE",
    }).then(()=>{
      history.push('/');
    })
  };
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/blogs/" + id);
  return (
    <div className={styles.blogDetails}>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading..</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
