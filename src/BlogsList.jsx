import styles from "./BlogsList.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogsList = ({ blogs, title }) => {
  return (
    <div className="blogsList">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className={styles.blogPreview} key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="blog-title">{blog.title}</h2>
            <h6>Written By {blog.author}</h6>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
