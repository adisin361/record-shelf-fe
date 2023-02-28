import './style.css';
import Header from '../Header';
const PageNotFound = () => {
  return (
    <>
      <Header />
      <div className="not-found">
        <p>Oops! 404 Page not found</p>
      </div>
    </>
  )
};

export default PageNotFound;