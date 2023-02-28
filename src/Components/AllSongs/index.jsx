import React from 'react';
import './style.css';
import MusicCard from '../MusicCard';
import menuIconSrc from '../../design/assets/icon-genre.svg';
import { GET_RECORDS } from '../../Constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import { useNavigate } from 'react-router-dom';
import likeMapperToMusic from '../../utils/likeMapperToMusic';
import { RecordsContext } from '../../context/recordsContext';
import uniqueGenre from '../../utils/uniqueGenre.js';

const AllSongs = () => {
  const { records, setRecords, genres, setGenres } = React.useContext(RecordsContext);
  const [error, setError] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    makeRequest(GET_RECORDS, navigate)
      .then((response) => {
        const uniqueGenres = uniqueGenre(response.data);
        setGenres(uniqueGenres);
        return likeMapperToMusic(response.data, navigate);
      })
      .then((response) => {
        setRecords(response)
      })
      .catch((e) => {
        setError(e.message);
      })
  }, []);

  if (error) {
    return (
      <div className='recordsError'>
        <p>{error}</p>
      </div>
    );
  }

  return records ? (
    <>
      <div className="all-songs">
        <div className='header-grid'>
          <p>all songs</p>
          <img src={menuIconSrc} alt="" onClick={() => {
            navigate('/genres')
          }} />
        </div>
        <div className='music-cards'>
          {records.map((eachRecord, index) => (
            <MusicCard key={eachRecord.id} recordData={eachRecord} index={index} />
          ))}
        </div>
      </div>
    </>
  ) :
    (
      <div className='recordDataLoader'>
        <p>Loading...</p>
      </div>
    )
};

export default AllSongs;