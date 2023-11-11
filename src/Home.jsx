import BlogsList from "./BlogsList";
import LoadingTemplate from "./LoadingTemplate";
import useFetch from "./useFetch";

const Home = () => {
  const {data:blogs, isLoading, error} = useFetch("http://localhost:3000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <LoadingTemplate />}
      {blogs && <BlogsList blogs={blogs} title="Blogs" />}
    </div>
  );
};

export default Home;
