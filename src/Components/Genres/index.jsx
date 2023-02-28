import React from 'react';
import './style.css';
import iconGridSrc from '../../design/assets/icon-grid.svg';
import MusicCard from '../MusicCard';
import { GET_RECORDS } from '../../Constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import likeMapperToMusic from '../../utils/likeMapperToMusic';
import { RecordsContext } from '../../context/recordsContext';

const Genres = () => {
  const { records, setRecords, genres, setGenres } = React.useContext(RecordsContext);
  const navigate = useNavigate();
  const [error, setError] = React.useState();

  React.useEffect(() => {
    if (!records.length || !genres.length) {
      navigate('/records');
    }
  }, [records, genres]);

  return (
    <>
      <div className='genres-main-container'>
        <div className='genre-header'>
          <p>genres</p>
          <img src={iconGridSrc} alt="grid-icon" onClick={() => {
            navigate('/records');
          }} />
        </div>

        {genres.map((genre) => {
          const genreImg = require(`../../design/assets/genre-${genre.toLowerCase()}.png`)
          return (<div className='genre-container'>
            <div className='genre-img'>
              <img src={genreImg} alt="" />
              <button>{genre.toLowerCase()}</button>
            </div>
            <div className='music-cardss'>
              {records.map((eachRecordData, index) => (
                eachRecordData.genre.name === genre && <MusicCard key={eachRecordData.id} recordData={eachRecordData} index={index} />
              ))}
            </div>
          </div>)
        })}

      </div>
    </>
  )
};

export default Genres;