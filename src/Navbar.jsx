import styles from './Navbar.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <h1>The Techy Blog</h1>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/create" className={styles.newblog}>New Blog</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
