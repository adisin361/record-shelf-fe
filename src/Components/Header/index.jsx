import './style.css';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='header'>
        <span className='main-heading' onClick={() => {
          navigate('/');
        }}>My <span className='inner-heading'>Record</span> Shelf</span>
      </div>
    </>
  )
};

export default Header;