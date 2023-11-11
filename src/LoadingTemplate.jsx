import styles from "./BlogsList.module.css";
const LoadingTemplate = () => {
  return (
    <div className="blogsList">
      <div className={styles.loadingBlogPreview}></div>
      <div className={styles.loadingBlogPreview}></div>
      <div className={styles.loadingBlogPreview}></div>
    </div>
  );
};

export default LoadingTemplate;
