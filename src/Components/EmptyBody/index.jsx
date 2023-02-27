import './style.css';
import { useNavigate } from 'react-router-dom';
const EmptyBody = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='empty-body'>
        <div className='text-part'>
          <p>:((</p>
          <p>seems a bit empty in here</p>
        </div>
        <button className='sync-button' onClick={() => {
          navigate('records')
        }}>sync</button>
      </div>
    </>
  )
};

export default EmptyBody;