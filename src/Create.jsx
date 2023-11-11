import { useState } from "react";
import { useHistory } from 'react-router-dom';
import styles from "./Create.module.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history=useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false)
      history.push('/');
    });
  };

  return (
    <div className={styles.create}>
      <h1>Add a new blog</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="#title">Title: </label>
        <input
          type="text"
          required
          id="#title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="#body">Body: </label>
        <textarea
          required
          id="#body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="#author">Author</label>
        <select
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
};

export default Create;
